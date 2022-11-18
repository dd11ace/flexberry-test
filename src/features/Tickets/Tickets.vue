<script setup lang="ts">
import { ref } from 'vue';
import TicketsNavBar from './TicketsNavBar.vue';
import TicketsFilter from './TicketsFilter.vue';
import type { Ticket } from '@/api/apiTickets/getTickets';
import TicketsCard from './TicketsCards.vue';
import { apiTickets } from '@/api/apiTickets';

const tickets = ref<Ticket[]>([]);

const getTickets = async () => {
  try {
    const response = await apiTickets.getTickets();
    console.log(tickets);
    tickets.value = response.data;
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
        class="tickets__card"
        v-for="(ticket, index) in tickets"
        :key="index"
        :ticket="ticket"
      />
    </div>
  </div>
  <button @click="getTickets">ticket</button>
</template>

<style lang="scss">
.tickets {
  display: flex;

  &__col-left {
    margin-right: 20px;
  }

  &__card {
    margin-bottom: 20px;
  }
}
</style>
