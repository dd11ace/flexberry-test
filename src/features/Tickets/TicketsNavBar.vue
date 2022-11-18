<script setup lang="ts">
interface NavbarItem {
  name: string;
  id: number;
  selected?: boolean;
}
const navbarListItems: NavbarItem[] = [
  {
    name: 'Самый дешевый',
    id: 1,
    selected: true,
  },
  {
    name: 'Самый быстрый',
    id: 2,
  },
  {
    name: 'Оптимальный',
    id: 3,
  },
];
</script>

<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li
        class="navbar__list-item"
        :class="{ 'navbar__list-item--selected': navbarListItem.selected }"
        v-for="navbarListItem in navbarListItems"
        :key="navbarListItem.id"
      >
        {{ navbarListItem.name }}
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.navbar {
  margin-top: -12px;
  margin-left: -20px;

  &__list {
    display: flex;
    justify-content: center;
    width: 502px;
    height: 50px;
    font-size: 12px;
    text-transform: uppercase;
    list-style-type: none;
  }

  &__list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 168px;
    min-height: 50px;
    font-weight: 600;
    outline: 1px solid var(--border-gray);
    background-color: var(--background-white);

    &:first-child {
      border-top-left-radius: 5px;
    }

    // &:last-child {
    //   border-radius
    // }

    &--selected {
      color: var(--text-white);
      background-color: var(--blue-main);
    }
  }
}
</style>
