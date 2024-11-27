
import { getEvent } from "@/actions/event";
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { CalendarIcon, MapPinIcon, TicketIcon, UsersIcon } from 'lucide-react'
import { format } from 'date-fns'
import TicketForm from "@/app/events/[id]/form";
import { formatPrice, formatDate } from "@/lib/utils";
import Faq from "@/components/faq";

export default async function Page({ params }: { params: { id: string }}) {
    const { id } = params;
    const event = await getEvent(id);

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
      <Card className="mb-8 h-full">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-pink-500">{event.name}</CardTitle>
              <CardDescription>{format(event.date, 'EEEE, MMMM d, yyyy')}</CardDescription>
            </div>
            <Badge variant={event.status === 'active' ? 'default' : 'secondary'}>
              {event.status === 'active' ? 'En Venta' : 'Todavia no a la venta'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{event.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="mr-2 h-4 w-4" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center">
              <TicketIcon className="mr-2 h-4 w-4" />
              <span>${formatPrice(event.price)}</span>
            </div>
            <div className="flex items-center">
              <UsersIcon className="mr-2 h-4 w-4" />
                <span>{event.capacity.toLocaleString()} attendees</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex w-full justify-end">
            <TicketForm eventId={params.id} />
        </CardFooter>
      </Card>
      <Faq />
    </div>
  )
}