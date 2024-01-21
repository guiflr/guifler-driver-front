import axios from 'axios'

const userData = localStorage.getItem('user')

const user = userData ? JSON.parse(userData) : null

console.log('user', user.data.token)

const headers = user ? { Authorization: `Bearer ${user.data.token}` } : {}

export const guiflerApi = axios.create({
  baseURL: process.env.REACT_APP_GUIFLER_DRIVER_API_URL,
  headers
})
