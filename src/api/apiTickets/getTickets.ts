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

export interface GetTicketsParams {
  _page?: number;
  _limit?: number;
  _sort?: 'price' | 'segments[0].duration';
  _order?: 'asc' | 'desc';
}

export const getTickets = ({
  _page = 1,
  _limit = 5,
  _sort = 'price',
  _order = 'asc',
}: GetTicketsParams = {}) => {
  return apiClient.get<Ticket[]>('tickets', {
    params: {
      _limit,
      _order,
      _page,
      _sort,
    },
  });
};
