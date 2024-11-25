'use client';

import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from '@/lib/utils';
import { createEvent } from '@/actions/event';
import { useRouter } from 'next/navigation';
import { toast } from "sonner"


export const Event = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    description: z.string().min(1, { message: 'Description is required' }),
    date: z.date({ required_error: 'Date is required' }),
    price: z.number().int().min(0, { message: 'Price must be a non-negative integer' }),
    capacity: z.number().int().min(0, { message: 'Capacity must be a non-negative integer' }),
    status: z.string().refine((val) => val === 'draft' || val === 'active', {
        message: 'Status must be either draft or active',
    }),
    location: z.string().min(1, { message: 'Location is required' }),
});

export type Event = z.infer<typeof Event>;

export function EventForm() {
    const form = useForm<Event>({
        resolver: zodResolver(Event),
    });
    const router = useRouter();

    async function onSubmit(values: Event) {
        const response = await createEvent(values);
        if (response.success) {
            form.reset();
            toast.success('Evento creado exitosamente');
            router.push('/events/');
        } else {
            toast.error('Error al crear el evento');
        }
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className='gap-8 grid grid-cols-2'>
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre del evento</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>Nombre del Evento</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='description'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Descripción</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>Descripción del evento</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='date'
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Fecha</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-[240px] pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Seleciona una fecha</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormDescription>
                            Selecciona la fecha del evento
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                />
                <FormField
                    control={form.control}
                    name='price'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Precio</FormLabel>
                            <FormControl>
                                <Input type='number' {...field} onChange={event => field.onChange(+event.target.value)} />
                            </FormControl>
                            <FormDescription>Precio del evento</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='capacity'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Capacidad</FormLabel>
                            <FormControl>
                                <Input type='number' {...field} onChange={event => field.onChange(+event.target.value)} />
                            </FormControl>
                            <FormDescription>Capacidad del evento</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='status'
                    render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Seleciona un valor" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="active">Activo</SelectItem>
                              <SelectItem value="draft">Pendiente</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Selecciona el status del evento
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                />
                <FormField
                    control={form.control}
                    name='location'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ubicación</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>Ubicación del evento</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit'>Guardar</Button>
            </form>
        </Form>
    )

}