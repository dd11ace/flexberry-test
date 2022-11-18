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

    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 168px;
      min-height: 50px;
      font-weight: 600;

      outline: 1px solid var(--border-gray);
      background-color: var(--background-white);
      &--selected {
        color: var(--text-white);
        background-color: var(--blue-main);
      }
    }
  }
}
</style>
