import { apiClient } from '@/api/apiClient';
import type { Ticket } from '@/api/apiTickets/getTickets';

export const sortTickets = ({ _sort = 'price', _order = 'asc' } = {}) => {
  return apiClient.get<Ticket[]>('tickets', {
    params: {
      _sort,
      _order,
    },
  });
};
