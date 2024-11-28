import React, { createContext, useState } from 'react'
type Chat = {
    role: string,
    content: string
}

type ChatContextType = {
    chats: Chat[],
    setChats: React.Dispatch<React.SetStateAction<Chat[]>>
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

type ChatProviderProps = {
    children: React.ReactNode
}

const ChatContext = createContext<ChatContextType>({ chats: [], setChats: () => {}, isLoading: false, setIsLoading: () => {} })

const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [ chats, setChats ] = useState<Chat[]>([])
  const [ isLoading, setIsLoading ] = useState<boolean>(false)

  return(
    <ChatContext.Provider value={{ chats, setChats, isLoading, setIsLoading }}>
        {children}
    </ChatContext.Provider>
  )
}

export { ChatContext, ChatProvider }