import { defineStore } from 'pinia';
import type { Ticket } from '@/api/apiTickets/getTickets';
import { apiTickets } from '@/api/apiTickets';

interface State {
  tickets: Ticket[];
  isLoading: boolean;
}

export const useTickets = defineStore({
  id: 'tickets',

  state: (): State => ({ tickets: [], isLoading: false }),

  actions: {
    async getTickets() {
      try {
        this.isLoading = true;
        const { data } = await apiTickets.getTickets();
        this.tickets = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
