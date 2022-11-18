<script setup lang="ts">
import TicketsNavBar from './TicketsNavBar.vue';
import TicketsFilter from './TicketsFilter.vue';
import TicketsCard from './TicketsCards.vue';
import { useTickets } from './ticketsStore';

const ticketsStore = useTickets();
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
        v-for="(ticket, index) in ticketsStore.tickets"
        :key="index"
        :ticket="ticket"
      />
    </div>
  </div>
  <button @click="ticketsStore.getTickets">ticket</button>
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
