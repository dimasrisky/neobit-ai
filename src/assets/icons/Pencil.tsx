import React from 'react'
interface PencilProps {
    style?: string
}

const Pencil: React.FC<PencilProps> = ({ style='w-[8px]' }) => {
  return (
    <svg className={style} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_8_366)">
            <path d="M4.80213 1.53685L6.21324 2.94796L1.87408 7.28712H0.462967V5.87601L4.80213 1.53685ZM5.29602 1.04296L6.10741 0.231567L7.51852 1.64268L6.70713 2.45407L5.29602 1.04296Z" fill="#AFADAD"/>
        </g>
        <defs>
            <clipPath id="clip0_8_366">
                <rect width="7.05556" height="7.05556" fill="white" transform="translate(0.462967 0.231567)"/>
            </clipPath>
        </defs>
    </svg>
  )
}

export default Pencil