import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Conversation, Register, Login } from './pages/Pages'
import { ChatProvider } from './context/Chat'
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/conversation', element: <Conversation /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChatProvider>
      <RouterProvider router={router}/>
    </ChatProvider>
  </StrictMode>,
)
