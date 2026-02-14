export type EventCardSize = "xs" | "s" | "m" | "l" | "xl" | "xxl";

export interface AgendaEvent {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  size: EventCardSize;
}
