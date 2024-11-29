import React from "react"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
interface BubbleChatProps {
    role: string,
    text: string
}

const BubbleChat: React.FC<BubbleChatProps> = ({ role, text }) => {
  return (
    <div className="w-full flex " style={{ justifyContent: role === 'user' ? 'flex-end' : 'flex-start' }}>
        <div className={`${role === 'user' ? 'px-[22px]' : 'px-1 w-[90%]' } py-[12px] rounded-full`} style={{ backgroundColor: role === 'user' ? '#161820' : 'transparent' }}>
            <div className="text-primary-white text-[13px] leading-6 md:text-[15px] md:leading-9">
              <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>{text}</Markdown>
            </div>
        </div>
    </div>
  )
}

export default BubbleChat