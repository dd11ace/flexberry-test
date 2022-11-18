import { defineStore } from 'pinia';
import type { Ticket } from '@/features/Tickets/ticketsTypes';

interface State {
  tickets: Ticket[];
}

export const useTickets = defineStore({
  id: 'tickets',
  state: (): State => ({ tickets: [] }),
});
