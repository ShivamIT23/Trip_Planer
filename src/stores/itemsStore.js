import { create } from "zustand";
import { initialItems } from "../lib/init";
import { persist } from "zustand/middleware";

export const useItemsStore = create(
  persist((set) => ({
    items: initialItems,

    addItem: (value) => {
      const newItem = {
        name: value,
        packed: false,
        id: new Date().getTime(),
      };

      set((state) => ({ items: [...state.items, newItem] }));
    },

    deleteItem: (id) => {
      set((state) => {
        const NewItems = state.items.filter((item) => item.id !== id);
        return { items: NewItems };
      });
    },

    toggleItem: (id) => {
      set((state) => {
        const NewItems = state.items.map((item) => {
          if (item.id === id) {
            return { ...item, packed: !item.packed };
          }
          return item;
        });
        return { items: NewItems };
      });
    },

    removeAllItems: () => {
      set(() => ({ items: [] }));
    },

    resetToInitial: () => {
      set(() => ({ items: initialItems }));
    },

    markAllAsComplete: () => {
      set((state) => {
        const newItems = state.items.map((item) => {
          return { ...item, packed: true };
        });

        return { items: newItems };
      });
    },

    markAllAsIncomplete: () => {
      set((state) => {
        const NewItems = state.items.map((item) => {
          return { ...item, packed: false };
        });

        return { items: NewItems };
      });
    },
  }) , {
    name : "items"
  })
);
