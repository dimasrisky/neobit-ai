import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction: React.FC = () => {
  return (
    <section id='call-to-action'>
        <div className='w-full flex justify-center items-center mt-[100px] lg:mt-[159px] bg-primary-black rounded-[10px] shadow-[2px_4px_80px_0_rgba(208,210,227,0.06)] border border-primary-white px-[20px] py-[39px] lg:py-[71px]'>
            <div className='flex flex-col text-primary-white text-center items-center gap-[5px] lg:gap-[12px]'>
                <h1 className='font-lexend font-medium text-[19px] sm:text-[27px] lg:text-[40px]'>Make your First Conversation</h1>
                <p className='font-inter text-[7px] sm:text-[11px] lg:text-[16px]'>Get started with your first conversation. No Credit card required.</p>
                <Link to={'/conversation'} className='bg-primary-white mt-[10px] w-[130px] px-[24px] py-[6px] rounded-full font-semibold text-[9px] text-primary-black transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105 shadow-primary-white sm:w-[160px] sm:text-[12px] lg:text-[14px] lg:w-[255px] lg:mt-[25px] lg:py-[12px]'>Start Conversation</Link>
            </div>
        </div>
    </section>
  )
}

export default CallToAction