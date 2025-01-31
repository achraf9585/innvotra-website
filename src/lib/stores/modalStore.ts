import { writable } from "svelte/store";

export const modalStore = writable({
  isOpen: false,
  title: "",
});

export function openModal(title: string) {
  modalStore.update((state) => ({ ...state, isOpen: true, title }));
}

export function closeModal() {
  modalStore.update((state) => ({ ...state, isOpen: false }));
}
