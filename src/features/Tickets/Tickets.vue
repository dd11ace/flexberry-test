<script setup lang="ts">
import TicketsNavBar from './TicketsNavBar.vue';
import TicketsFilter from './TicketsFilter.vue';
import TicketsCard from './TicketsCards.vue';
import { useTickets } from './ticketsStore';

const ticketsStore = useTickets();
ticketsStore.getTickets();

// const getMoreTickets = () => {
//   ticketsStore;
// };
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
      <button class="tickets__button">Показать еще 5 билетов!</button>
    </div>
  </div>
</template>

<style lang="scss">
.tickets {
  display: flex;

  &__col-right {
    margin-left: 20px;
    margin-bottom: 50px;
  }

  &__card {
    margin-bottom: 20px;
  }

  &__button {
    width: 502px;
    height: 50px;
    font-size: 12px;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    color: var(--text-white);
    background-color: var(--blue-main);
    cursor: pointer;
  }
}
</style>
