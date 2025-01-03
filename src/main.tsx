import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import IsLoggedIn from './middleware/IsLoggedIn'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Conversation, Register, Login, LoggedInConversation } from './pages/Pages'
import { ChatProvider } from './context/Chat'
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/conversation', element: <Conversation /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { 
    path: '/c/:chatId', 
    element: '',
    children: [
      { 
        index: true,
        element: <LoggedInConversation />
      }
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChatProvider>
      <RouterProvider router={router}/>
    </ChatProvider>
  </StrictMode>,
)
