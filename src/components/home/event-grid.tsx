import { EventCard } from "@/components/home/event-card";
import type { AgendaEvent } from "@/types/agenda";

interface EventGridProps {
  events: AgendaEvent[];
}

export function EventGrid({ events }: EventGridProps) {
  if (events.length === 0) {
    return (
      <section className="events-empty" aria-live="polite" id="feed">
        <p>No events for this month yet. Pick another month to continue.</p>
      </section>
    );
  }

  return (
    <section className="events-grid" aria-label="Agenda events" id="feed">
      {events.map((event, index) => (
        <EventCard key={event.id} event={event} index={index} />
      ))}
    </section>
  );
}
