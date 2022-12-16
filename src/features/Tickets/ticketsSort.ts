import { apiClient } from '@/api/apiClient';
import type { Ticket } from '@/api/apiTickets/getTickets';

export const sortTicketsCheapest = ({
  _page = 1,
  _limit = 5,
  _sort = 'price',
  _order = 'asc',
} = {}) => {
  return apiClient.get<Ticket[]>('tickets', {
    params: {
      _page,
      _limit,
      _sort,
      _order,
    },
  });
};

export const sortTicketsFastest = ({
  _page = 1,
  _limit = 5,
  _sort = 'segments[0].duration',
  _order = 'asc',
} = {}) => {
  return apiClient.get<Ticket[]>('tickets', {
    params: {
      _page,
      _limit,
      _sort,
      _order,
    },
  });
};
