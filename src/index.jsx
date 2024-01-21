import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { ToastContextProvider } from './context/ToastProvider'
import { SignIn } from './pages/SignIn'
import { Users } from './pages/Users'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />
  },
  {
    path: '/usuarios',
    element: <Users />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContextProvider>
      <RouterProvider router={router} />
    </ToastContextProvider>
  </React.StrictMode>
)
