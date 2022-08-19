<script setup lang="ts">
import TicketsNavBar from './TicketsNavBar.vue';
import TicketsFilter from './TicketsFilter.vue';
import { ref } from 'vue';
import type { Ticket } from './ticketsTypes';
import TicketsCard from './TicketsCard.vue';

const tickets = ref<Ticket[]>([]);

const getTickets = async () => {
  try {
    const response = await fetch('http://localhost:3000/tickets');
    console.log(tickets);
    tickets.value = await response.json();
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="tickets">
    <aside class="tickets__col-left">
      <TicketsFilter />
    </aside>
    <div class="tickets__col-right">
      <TicketsNavBar />
      <TicketsCard
        v-for="(ticket, index) in tickets"
        :key="index"
        :ticket="ticket"
      />
    </div>
  </div>
  <button @click="getTickets">ticket</button>
  <h1 v-for="(ticket, index) in tickets" :key="index">
    {{ ticket.segments[0].date }}
  </h1>
</template>

<style lang="scss">
.tickets {
  display: flex;
}
</style>
