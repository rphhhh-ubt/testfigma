import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventDetailsPage } from "@/components/events/event-details-page";
import { agendaEvents } from "@/data/events";

interface EventPageProps {
  params: Promise<{ eventId: string }>;
}

export async function generateStaticParams() {
  return agendaEvents.map((event) => ({ eventId: event.id }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { eventId } = await params;
  const event = agendaEvents.find((item) => item.id === eventId);

  if (!event) {
    return {
      title: "Event not found",
    };
  }

  return {
    title: `${event.title} - ArtConnection`,
    description: event.description,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { eventId } = await params;
  const event = agendaEvents.find((item) => item.id === eventId);

  if (!event) {
    notFound();
  }

  const relatedEvents = agendaEvents
    .filter((item) => item.id !== event.id)
    .slice(0, 4);

  return <EventDetailsPage event={event} relatedEvents={relatedEvents} />;
}
