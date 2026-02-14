export type EventCardSize = "xs" | "s" | "m" | "l" | "xl" | "xxl";

export type EventMonth = "March" | "April";

export interface AgendaEvent {
  id: string;
  title: string;
  category: string;
  date: string;
  month: EventMonth;
  location: string;
  description: string;
  image: string;
  size: EventCardSize;
}
