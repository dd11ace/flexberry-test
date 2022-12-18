import type { Ticket, GetTicketsParams } from '@/api/apiTickets/getTickets';
import { defineStore } from 'pinia';
import { apiTickets } from '@/api/apiTickets';

interface State {
  tickets: Ticket[];
  isLoading: boolean;
  currentPage: number;
  currentSort: GetTicketsParams['_sort'];
}

export const useTickets = defineStore({
  id: 'tickets',

  state: (): State => ({
    tickets: [],
    isLoading: false,
    currentPage: 1,
    currentSort: 'price',
  }),

  actions: {
    async getTickets({ params }: { params?: GetTicketsParams } = {}) {
      try {
        this.isLoading = true;
        const response = await apiTickets.getTickets({
          ...params,
          _page: this.currentPage,
          _sort: this.currentSort,
        });
        this.currentPage++;

        this.tickets = [...this.tickets, ...response.data];
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
