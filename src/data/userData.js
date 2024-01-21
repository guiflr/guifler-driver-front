import { create } from 'zustand'
import { getUsers } from '../controllers/getUsers'

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: [],
  errorData: null
}

export const userGetData = create((set) => ({
  ...initialState,

  execute: async () => {
    set({ ...initialState, loading: true })
    try {
      console.log('começou')
      const res = await getUsers()
      set({ ...initialState, success: true, data: res.data })
    } catch (err) {
      console.error('Error in data fetch:', err)
      set({ ...initialState, error: true, errorData: err.message })
    }
  }
}))
