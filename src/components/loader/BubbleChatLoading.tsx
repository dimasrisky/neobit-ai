import React from 'react'

const BubbleChatLoading: React.FC = () => {
  return (
    <div className='flex items-center gap-5'>
      <div className="flex items-center">
        <span className="bar w-[3px] h-[15px] bg-primary-white/50 rounded-lg animate-[scale-up_1s_linear_infinite]"></span>
        <span className="bar w-[3px] h-[30px] bg-primary-white/50 rounded-lg mx-[5px] animate-[scale-up_2s_linear_infinite]"></span>
        <span className="bar w-[3px] h-[15px] bg-primary-white/50 rounded-lg animate-[scale-up_3s_linear_infinite]"></span>
      </div>
      <h5 className='text-primary-white text-[13px] md:text-[16px]'>Neobot is thinking...</h5>
    </div>
  )
}

export default BubbleChatLoading