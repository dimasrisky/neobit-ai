import React from 'react'
interface SendProps {
    style?: string
}

const Send: React.FC<SendProps> = ({ style='w-[30px]' }) => {
  return (
    <svg className={style} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_5_159)">
            <path d="M2.5125 26.25L28.75 15L2.5125 3.75L2.5 12.5L21.25 15L2.5 17.5L2.5125 26.25Z" fill="#AFADAD"/>
        </g>
        <defs>
            <clipPath id="clip0_5_159">
              <rect width="30" height="30" fill="white"/>
            </clipPath>
        </defs>
    </svg>
  )
}

export default Send