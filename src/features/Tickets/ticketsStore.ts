import type { Ticket, GetTicketsParams } from '@/api/apiTickets/getTickets';
import { defineStore } from 'pinia';
import { apiTickets } from '@/api/apiTickets';

interface State {
  tickets: Ticket[];
  isLoading: boolean;
}

export const useTickets = defineStore({
  id: 'tickets',

  state: (): State => ({ tickets: [], isLoading: false }),

  actions: {
    async getTickets({ params }: { params: GetTicketsParams }) {
      try {
        this.isLoading = true;
        const { data } = await apiTickets.getTickets(params);
        this.tickets = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },

    getTicketsCheapest() {
      this.getTickets({ params: { _sort: 'price', _order: 'asc' } });
    },

    getTicketsFastest() {
      this.getTickets({
        params: { _sort: 'segments[0].duration', _order: 'asc' },
      });
    },
  },
});
