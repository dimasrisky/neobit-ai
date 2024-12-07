import React from 'react'
import heroImage from '../../assets/img/about-image.webp'

const About: React.FC = () => {
  return (
    <section id='about'>
        <div className='w-full mx-auto flex flex-col items-start mt-[100px] md:flex-row md:justify-center md:items-center md:gap-5 lg:gap-10 lg:mt-[159px]'>
            <img src={heroImage} alt="about-image" className='w-full scale-110 md:w-[350px] lg:w-[500px]'/>
            <div className='text-primary-white'>
                <h1 className='font-lexend font-semibold text-[23px] sm:text-[28px] md:text-[18px] lg:text-[28px]'>What is Neobot Ai?</h1>
                <p className='font-inter text-[11px] leading-[190%] mt-[19px] mb-[39px] sm:text-[13px] md:text-[9px] lg:text-[14px] lg:max-w-[490px]'>Neobot is an advanced AI assistant powered by Qwen2.5-Coder model. With this technology, NeoBot can understand and respond to your words quickly and accurately.</p>
                <button className="bg-primary-white py-[7px] px-[28px] rounded-full outline-none transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-primary-white/20 md:py-[5px] md:px-[25px] lg:py-[7px] lg:px-[28px]">
                    <a href="https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct" target='_blank' className="text-secondary-black text-[12px] font-semibold">View Model</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default About