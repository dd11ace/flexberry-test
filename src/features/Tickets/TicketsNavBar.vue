<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__list-item navbar__list-item--selected">
        Самый Дешевый
      </li>
      <li class="navbar__list-item">Самый быстрый</li>
      <li class="navbar__list-item">Оптимальный</li>
    </ul>
  </nav>
</template>

<style lang="scss">
.navbar__list {
  display: flex;
  font-size: 12px;
  text-transform: uppercase;
  list-style-type: none;
  border-radius: 5px;

  &-item {
    padding: 20px;
    font-weight: 600;
    border: 1px solid var(--border-gray);
    &--selected {
      color: var(--text-white);
      background-color: var(--blue-main);
    }
  }
}
</style>
