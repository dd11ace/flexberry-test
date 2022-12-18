import type { Ticket, GetTicketsParams } from '@/api/apiTickets/getTickets';
import { defineStore } from 'pinia';
import { apiTickets } from '@/api/apiTickets';

interface State {
  tickets: Ticket[];
  isLoading: boolean;
  currentPage: number;
}

export const useTickets = defineStore({
  id: 'tickets',

  state: (): State => ({
    tickets: [],
    isLoading: false,
    currentPage: 1,
  }),

  actions: {
    async getTickets({ params }: { params: GetTicketsParams }) {
      try {
        this.isLoading = true;
        const response = await apiTickets.getTickets({
          ...params,
          _page: this.currentPage,
        });
        this.currentPage++;

        this.tickets = [...this.tickets, ...response.data];
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },

    getTicketsCheapest() {
      this.tickets = [];
      this.getTickets({ params: { _sort: 'price', _order: 'asc' } });
    },

    getTicketsFastest() {
      this.tickets = [];
      this.getTickets({
        params: { _sort: 'segments[0].duration', _order: 'asc' },
      });
    },
  },
});
