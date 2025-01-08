import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Google, Facebook } from '../assets/Assets'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, facebookProvider, googleProvider } from '../config/firebase'


const Register: React.FC = () => {
    const [ isLoadingEmailAuth, setIsLoadingEmailAuth ] = useState<boolean>(false)
    const [ isLoadingGoogleAuth, setIsLoadingGoogleAuth ] = useState<boolean>(false)
    const [ isLoadingFacebookAuth, setIsLoadingFacebookAuth ] = useState<boolean>(false)
    const navigate = useNavigate()
    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoadingEmailAuth(true)
        const formData = new FormData(event.currentTarget)
        const email = formData.get("email") as string
        const password = formData.get("password") as string
        try{
            const signIn = await createUserWithEmailAndPassword(auth, email, password)
            console.log(signIn.user)
            alert('Success Register')
            setIsLoadingEmailAuth(false)
            navigate('/c/12345')
        }catch(err: any){
            alert(err.message)
            setIsLoadingEmailAuth(false)
        }
    }

    const registerWithGoogle = async () => {
        setIsLoadingGoogleAuth(true)
        try{
            await signInWithPopup(auth, googleProvider)
            setIsLoadingGoogleAuth(false)
            navigate('/c/12345')
        }catch(error: any){
            if(error.message != 'Firebase: Error (auth/popup-closed-by-user).') alert(error.message)
                setIsLoadingGoogleAuth(false)
        }
    }

    const registerWithFaccebook = async () => {
        setIsLoadingFacebookAuth(true)
        try{
            await signInWithPopup(auth, facebookProvider)
            setIsLoadingFacebookAuth(false)
            navigate('/c/12345')
        }catch(error: any){
            if(error.message != 'Firebase: Error (auth/popup-closed-by-user).') alert(error.message)
            setIsLoadingFacebookAuth(false)
        }
    }
    return (
    <div className='w-[90%] h-screen mx-auto flex justify-center items-center'>
        <div className='w-[428px] flex flex-col text-white'>
            {/* Title */}
            <div>
                <h1 className='mb-[16px] font-lexend text-[35px] text-primary-white font-normal'>Sign up for free</h1>
                <p className='font-light text-[14px] font-inter leading-[26px] text-primary-white'>Start your journey with Neobot, Create an account and start your first conversation.</p>
            </div>
            <form action="" onSubmit={submitForm}>
                <div className='flex flex-col gap-[15px] mt-[28px]'>
                    {/* Email Form */}
                    <div className='w-full flex flex-col gap-[8px]'>
                        <label htmlFor="email" className='text-primary-white text-[16px]'>Email</label>
                        <input type="email" id='email' name='email' placeholder='Type your email...' className='bg-primary-black text-[14px] rounded-[8px] outline-none py-[16px] px-[26px] border-[0.4px] border-primary-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue transition-all duration-300' required />
                    </div>
                    {/* Password Form */}
                    <div className='w-full flex flex-col gap-[8px]'>
                        <label htmlFor="password" className='text-primary-white text-[16px]'>Password</label>
                        <input type="password" id='password' name='password' placeholder='Type your password...' className='bg-primary-black text-[14px] rounded-[8px] outline-none py-[16px] px-[26px] border-[0.4px] border-primary-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue transition-all duration-300' required />
                    </div>
                </div>
                <div className='mt-[22px] flex flex-col gap-[16px]'>
                    <h5 className='text-center text-[13px] text-primary-white'>Already have account? <Link className='underline' to={'/login'}>Sign in</Link></h5>
                    <button type='submit' className='w-full bg-primary-blue flex justify-center items-center py-[13px] rounded-[8px] text-[16px] text-white hover:bg-primary-dark-blue hover:ring-2 hover:ring-primary-light-blue transition-all duration-300'>
                        {isLoadingEmailAuth ? <div className="w-7 h-7 border-4 border-t-primary-white border-gray-200 rounded-full animate-spin"></div> : 'Sign up'}
                    </button>
                </div>
            </form>
            <div className='w-full border-t-[0.4px] my-[22px] border-primary-white'></div>
            <div className='w-full flex flex-col gap-[21px]'>
                <div onClick={registerWithGoogle} className='w-full bg-primary-white font-semibold text-primary-black py-[13px] rounded-[8px] text-[16px] flex justify-center items-center gap-[14px] cursor-pointer' >
                    {isLoadingGoogleAuth && <div className="w-7 h-7 border-4 border-t-secondary-black border-primary-white rounded-full animate-spin"></div>}
                    {!isLoadingGoogleAuth && (
                        <>
                        <Google />
                        <p>Sign up with Google</p>
                        </>
                    )}
                </div>
                <div onClick={registerWithFaccebook} className='w-full bg-primary-white font-semibold text-primary-black py-[13px] rounded-[8px] text-[16px] flex justify-center items-center gap-[14px] cursor-pointer' >
                    {isLoadingFacebookAuth && <div className="w-7 h-7 border-4 border-t-secondary-black border-primary-white rounded-full animate-spin"></div>}
                    {!isLoadingFacebookAuth && (
                        <>
                        <Facebook />
                        <p>Sign up with Facebook</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register