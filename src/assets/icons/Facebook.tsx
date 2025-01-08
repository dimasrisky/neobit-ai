import React from 'react'
interface FacebookProps {
    style?: string
}

const Facebook: React.FC<FacebookProps> = ({ style='w-[23px]' }) => {
  return (
    <svg className={style} viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_125_459)">
            <path d="M12.7546 21.5383V12.2723H16.7258L17.3876 8.30116H12.7546V6.31559C12.7546 4.99188 13.4178 4.33002 14.7402 4.33002H16.7258V0.358887C16.0639 0.358887 14.5814 0.358887 13.4165 0.358887C10.1072 0.358887 8.7835 2.34445 8.7835 5.65373V8.30116H4.81236V12.2723H8.7835V21.5383H12.7546Z" fill="#3B5998" />
        </g>
        <defs>
            <clipPath id="clip0_125_459">
                <rect width="21.1794" height="21.1794" fill="white" transform="translate(0.841248 0.358887)" />
            </clipPath>
        </defs>
    </svg>
  )
}

export default Facebook