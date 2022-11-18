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

export const getTickets = ({ _page = 1, _limit = 5 } = {}) => {
  return apiClient.get<Ticket[]>('tickets', {
    params: {
      _page,
      _limit,
    },
  });
};
