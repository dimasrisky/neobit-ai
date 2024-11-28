import React from 'react'

const BubbleChatLoading: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-2 bg-secondary-black py-4 w-[80px] rounded-full">
        <div className="w-2 h-2 bg-primary-white rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-primary-white rounded-full animate-bounce delay-200"></div>
        <div className="w-2 h-2 bg-primary-white rounded-full animate-bounce delay-300"></div>
    </div>
  )
}

export default BubbleChatLoading