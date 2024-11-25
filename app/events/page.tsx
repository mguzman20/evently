import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, UsersIcon, BanknoteIcon } from 'lucide-react'
import { getEvents } from '@/actions/event'
import Link from "next/link";

export default async function Events() {
  const events = (await getEvents()).filter((event) => event.status === 'active');

  return (
    <div className="container mx-auto p-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:pb-10 relative z-20 font-bold tracking-tight">
        Proximos eventos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id}>
          <Card key={event.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{event.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{event.description}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CalendarIcon />
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPinIcon />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <UsersIcon />
                  <span>Cantidad: {event.capacity}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <BanknoteIcon />
                <span className="font-bold">{formatPrice(event.price)}</span>
              </div>
            </CardFooter>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

function formatDate(dateString: Date) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }).format(date);
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CLP'
  }).format(price);
}

