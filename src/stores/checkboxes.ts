import { defineStore } from 'pinia';

export const useCheckboxes = defineStore({
  id: 'checkboxes',
  state: () => {
    return {
      // for initially empty lists
      checkboxes: [] as Checkbox[],
      // for data that is not yet loaded
      check: null as Checkbox | null,
    };
  },
});

interface Checkbox {
  title?: string;
  id?: string;
}
