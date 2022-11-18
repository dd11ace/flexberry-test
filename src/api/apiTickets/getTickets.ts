import { apiClient } from '../apiClient';

interface Segment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

export interface Ticket {
  price: number;
  carrier: string;
  segments: [Segment, Segment];
}

export const getTickets = () => {
  return apiClient.get<Ticket[]>('tickets');
};
