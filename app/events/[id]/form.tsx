'use client';

import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { QuantityInput } from "@/components/quantity-input"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { createTicket } from '@/actions/ticket';
import { toast } from "sonner"

export const Ticket = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    lastname: z.string().min(1, { message: 'Lastname is required' }),
    email: z.string().email({ message: 'Invalid email' }).min(1, { message: 'Email is required' }),
    quantity: z.number().min(1, { message: 'Quantity is required' }).max(10, { message: 'Quantity cannot exceed 10' })
});

export type FormTicket = z.infer<typeof Ticket>;
export default function TicketForm({ eventId }: { eventId: string }) {
    const form = useForm<FormTicket>({
        resolver: zodResolver(Ticket),
        defaultValues: {
            quantity: 1
        }
    });

    const onSubmit = async (data: FormTicket) => {
        const response = await createTicket(data, eventId, data.quantity)

        if (response.success) {
            toast.success('Tickets comprados!');
            form.reset();
        } else {
            toast.error('Error creating ticket');
        }


    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size={'lg'}>Comprar</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Comprar tickets</SheetTitle>
                    <SheetClose />
                </SheetHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>Tu Nombre</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Apellido</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>Tu Apellido</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>Tu Email</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cantidad</FormLabel>
                                    <FormControl>
                                        <QuantityInput value={field.value} onChange={field.onChange} />
                                    </FormControl>
                                    <FormDescription>Número de tickets</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <SheetFooter>
                            <SheetTrigger>
                                <Button type="submit">Comprar tickets</Button>
                            </SheetTrigger>
                        </SheetFooter>
                    </form>
                    
                </Form>
            </SheetContent>
        </Sheet>
    )
}

