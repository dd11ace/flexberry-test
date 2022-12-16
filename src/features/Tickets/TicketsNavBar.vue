<script setup lang="ts">
import { ref } from 'vue';
import { useTickets } from './ticketsStore';

const ticketsStore = useTickets();

const sortCheapest = ticketsStore.getTicketsCheapest;
const sortFastest = ticketsStore.getTicketsFastest;

const ITEMS = [
  {
    id: 1,
    title: 'Самый дешевый',
    onClickCallback: sortCheapest,
  },
  {
    id: 2,
    title: 'Самый быстрый',
    onClickCallback: sortFastest,
  },
  {
    id: 3,
    title: 'Оптимальный',
  },
] as const;

const selected = ref<typeof ITEMS[number]['id']>(1);

const handleClick = (item: typeof ITEMS[number]) => {
  selected.value = item.id;

  if ('onClickCallback' in item) {
    item.onClickCallback();
  }
};
</script>

<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__list-item" v-for="item in ITEMS" :key="item.id">
        <button
          class="navbar__button"
          :class="{ 'navbar__button--selected': selected === item.id }"
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
    // min-width: 502px;
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
    // display: flex;
    // align-items: center;
    // justify-content: center;
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
    cursor: pointer;

    &:hover {
      color: var(--text-black);
      background-color: var(--secondary-light-blue);
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
      cursor: default;
    }
  }
}
</style>
