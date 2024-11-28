import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Conversation } from './pages/Pages'
import { ChatProvider } from './context/Chat'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Conversation />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChatProvider>
      <RouterProvider router={router}/>
    </ChatProvider>
  </StrictMode>,
)
