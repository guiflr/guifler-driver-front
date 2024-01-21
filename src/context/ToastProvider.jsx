import { Toast } from '../components/Toast'
import { ToastContext } from './ToastContext'

export const ToastContextProvider = ({ children }) => {
  return (
    <ToastContext.Provider value={{}}>
      <Toast />
      {children}
    </ToastContext.Provider>
  )
}
