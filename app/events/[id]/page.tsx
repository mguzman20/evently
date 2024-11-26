
import { getEvent } from "@/actions/event";
import TicketForm from "@/app/admin/tickets/form";

export default async function Page({ params }: { params: { id: string }}) {
    const { id } = params;
    const event = await getEvent(id);

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div className="">
            <h1>{event.name}</h1>
            <p>{event.description}</p>
            <TicketForm eventId={id} />
        </div>
    );
}