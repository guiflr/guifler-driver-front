import axios from 'axios'

export const guiflerApi = axios.create({ baseURL: process.env.REACT_APP_GUIFLER_DRIVER_API_URL })