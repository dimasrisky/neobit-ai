import React, { useContext } from 'react'
import { ChatContext } from '../context/Chat'
import { BubbleChatLoading, BubbleChat } from './Components'
interface ActiveConversationProps {
  chats: {
    role: string,
    content: string
  }[]
}

const ActiveConversation: React.FC<ActiveConversationProps> = ({ chats }) => {
  const { isLoading } = useContext(ChatContext)
  return (
    <div className="w-full h-[90%] flex flex-col gap-3 overflow-y-scroll pb-14 md:gap-8" style={{ scrollbarWidth: 'none'}}>
      {chats?.map((chat, index) => {
        if(index != 0) return <BubbleChat key={index} role={chat.role} text={chat.content} />
      })}
      {isLoading && <BubbleChatLoading />}
   </div>
  )
}

export default ActiveConversation