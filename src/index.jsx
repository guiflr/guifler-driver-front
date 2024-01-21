import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { ToastContextProvider } from './context/ToastProvider'
import { SignIn } from './pages/SignIn'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContextProvider>
      <RouterProvider router={router} />
    </ToastContextProvider>
  </React.StrictMode>
)
