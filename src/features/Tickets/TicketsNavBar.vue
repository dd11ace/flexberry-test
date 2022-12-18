<script setup lang="ts">
import { ref } from 'vue';
import { useTickets } from './ticketsStore';
import type { GetTicketsParams } from '@/api/apiTickets/getTickets';

const ticketsStore = useTickets();

interface NavbarItem {
  readonly id: number;
  readonly title: string;
  readonly sortType: GetTicketsParams['_sort'];
}

const ITEMS: NavbarItem[] = [
  {
    id: 1,
    title: 'Самый дешевый',
    sortType: 'price',
  },
  {
    id: 2,
    title: 'Самый быстрый',
    sortType: 'segments[0].duration',
  },
];

const selected = ref<typeof ITEMS[number]['id']>(1);

ticketsStore.getTickets();

const handleClick = (item: typeof ITEMS[number]) => {
  selected.value = item.id;

  ticketsStore.$reset();

  ticketsStore.currentSort = item.sortType;

  ticketsStore.getTickets();
};
</script>

<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__list-item" v-for="item in ITEMS" :key="item.id">
        <button
          class="navbar__button"
          :class="{ 'navbar__button--selected': selected === item.id }"
          :disabled="selected === item.id"
          @click="handleClick(item)"
        >
          {{ item.title }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.navbar {
  margin-top: -12px;
  margin-bottom: 20px;

  &__list {
    display: flex;
    justify-content: center;
    padding: 0;
    height: 50px;
    font-size: 12px;
    text-transform: uppercase;
    list-style-type: none;
  }

  &__list-item {
    flex-grow: 1;
  }

  &__button {
    min-width: 100%;
    padding: 15px;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.5px;
    border: none;
    text-transform: uppercase;
    outline: 1px solid var(--border-gray);
    background-color: var(--background-white);

    &:hover {
      background-color: var(--secondary-light-blue);
      cursor: pointer;
    }

    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    &--selected {
      color: var(--text-white);
      background-color: var(--blue-main);
    }

    &--selected:hover {
      background-color: var(--blue-main);
      cursor: default;
    }
  }
}
</style>
