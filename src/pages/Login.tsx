import React from 'react'
import { Link } from 'react-router-dom'
import { Google, Facebook } from '../assets/Assets'

const Login = () => {
  return (
    <div className='w-[90%] h-screen mx-auto flex justify-center items-center'>
        <div className='w-[438px] flex flex-col text-white'>
            {/* Title */}
            <div>
                <h1 className='mb-[16px] font-lexend text-[35px] text-primary-white font-normal'>Sign in with your account</h1>
                <p className='font-light text-[14px] font-inter leading-[26px] text-primary-white'>Log in and continue your exploration with Neobot. Reconnect with your smart assistant, always ready to help whenever you need.</p>
            </div>
            <div className='flex flex-col gap-[15px] mt-[28px]'>
                {/* Email Form */}
                <div className='w-full flex flex-col gap-[8px]'>
                    <label htmlFor="email" className='text-primary-white text-[16px]'>Email</label>
                    <input type="email" id='email' placeholder='Type your email...' className='bg-primary-black text-[14px] rounded-[8px] outline-none py-[16px] px-[26px] border-[0.4px] border-primary-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue transition-all duration-300' />
                </div>
                {/* Password Form */}
                <div className='w-full flex flex-col gap-[8px]'>
                    <label htmlFor="password" className='text-primary-white text-[16px]'>Password</label>
                    <input type="password" id='password' placeholder='Type your password...' className='bg-primary-black text-[14px] rounded-[8px] outline-none py-[16px] px-[26px] border-[0.4px] border-primary-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue transition-all duration-300' />
                </div>
            </div>
            <div className='mt-[22px] flex flex-col gap-[16px]'>
                <h5 className='text-center text-[13px] text-primary-white'>Dont have account? <Link className='underline' to={'/register'}>Sign up</Link></h5>
                <button className='w-full bg-primary-blue py-[13px] rounded-[8px] text-[16px] text-white hover:bg-primary-dark-blue hover:ring-2 hover:ring-primary-light-blue transition-all duration-300'>Sign in</button>
            </div>
            <div className='w-full border-t-[0.4px] my-[22px] border-primary-white'></div>
            <div className='w-full flex flex-col gap-[21px]'>
                <div className='w-full bg-primary-white font-semibold text-primary-black py-[13px] rounded-[8px] text-[16px] flex justify-center items-center gap-[14px] cursor-pointer' >
                    <Google />
                    <p>Sign in with Google</p>
                </div>
                <div className='w-full bg-primary-white font-semibold text-primary-black py-[13px] rounded-[8px] text-[16px] flex justify-center items-center gap-[14px] cursor-pointer' >
                    <Facebook />
                    <p>Sign in with Facebook</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login