import { EventCard } from "@/components/home/event-card";
import { agendaEvents } from "@/data/events";

export function EventGrid() {
  return (
    <section className="events-grid" aria-label="Agenda events">
      {agendaEvents.map((event, index) => (
        <EventCard key={event.id} event={event} index={index} />
      ))}
    </section>
  );
}
