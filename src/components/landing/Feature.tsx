import React from 'react'

type FeatureCardProps = {
    type: 'primary' | 'secondary',
    title: string,
    description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ type, title, description }) => {
    return(
        <div className={`w-full flex flex-col justify-center gap-[22px] ${type === 'primary' ? 'bg-primary-white shadow-[0px_4px_40px_0px_rgba(208,210,227,0.3)] border border-primary-white' : 'bg-transparent text-primary-white'} text-primary-black px-[33px] py-[34px] rounded-[11px] sm:w-[348px] lg:py-[28px] lg:w-[400px]`}>
            <h3 className='font-semibold text-[16px] lg:text-[19px]'>{title}</h3>
            <p className='text-[11px] leading-[179%]'>{description}</p>
        </div>
    )
}

const Feature: React.FC = () => {
  return (
    <section id='feature' className='scroll-mt-48'>
        <div className='mt-[100px] lg:mt-[159px]'>
            <h1 className='text-primary-white font-lexend font-semibold text-[22px] text-center mb-[50px] lg:mb-[57px] lg:text-[30px]'>Why Choose Neobot?</h1>
            <div className='flex flex-col gap-[25px] sm:flex-row sm:justify-between'>
                <FeatureCard type='primary' title='Human-Like Conversations' description='Built to understand and respond naturally, Neobot makes every interaction feel seamless and personal.' />
                <FeatureCard type='secondary' title='Long-Context Support' description='With the ability to process up to 128K tokens, Neobot can handle even complex tasks and conversations.' />
                <FeatureCard type='secondary' title='Code Assistant' description='Neobot leverages Qwen2.5-Coder`s coding expertise, providing unparalleled assistance with code generation, debugging, and optimization.' />
            </div>
        </div>
    </section>
  )
}

export default Feature