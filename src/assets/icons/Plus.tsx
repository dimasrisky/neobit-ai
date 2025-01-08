import React from 'react'
interface PlusProps {
    style?: string
}

const Plus: React.FC<PlusProps> = ({ style='w-[27px] h-[27px]' }) => {
  return (
    <svg className={style} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 5.90625V21.0938" stroke="#161820" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.90625 13.5H21.0938" stroke="#161820" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Plus