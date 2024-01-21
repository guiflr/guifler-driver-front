import { create } from 'zustand'

export const useToastData = create(set => ({
  toasts: [],
  addToast: toast => set(state => ({ toasts: [...state.toasts, toast] })),
  removeToast: indexToDelete =>
    set(state => {
      const toasts = state.toasts.filter((_, index) => index !== indexToDelete)

      return { toasts }
    })
}))
