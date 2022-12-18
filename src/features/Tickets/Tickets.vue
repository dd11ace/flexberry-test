<script setup lang="ts">
import TicketsNavBar from './TicketsNavBar.vue';
import TicketsFilter from './TicketsFilter.vue';
import TicketsCard from './TicketsCard.vue';
import { useTickets } from './ticketsStore';
import BaseButton from '@/components/BaseButton.vue';

const ticketsStore = useTickets();
</script>

<template>
  <section class="tickets">
    <aside class="tickets__col-left">
      <TicketsFilter />
    </aside>
    <div class="tickets__col-right">
      <TicketsNavBar />
      <div>
        <TicketsCard
          class="tickets__card"
          v-for="(ticket, index) in ticketsStore.tickets"
          :key="index"
          :ticket="ticket"
        />
        <div v-if="ticketsStore.isLoading">Загрузка билетов...</div>
        <BaseButton class="tickets__button" @click="ticketsStore.getTickets">
          Показать еще 5 билетов!
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.tickets {
  display: flex;

  &__col-right {
    min-width: 502px;
    margin-left: 20px;
    margin-bottom: 50px;
  }

  &__card {
    margin-bottom: 20px;
  }

  &__button {
    height: 50px;
  }
}
</style>
