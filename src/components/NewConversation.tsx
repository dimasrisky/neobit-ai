import React from 'react'
import ExamplePrompt from './ExamplePrompt'

const examplePrompt: string[] = ['Buatkan aku jadwal harian', 'Resep masakan terbaru', 'Ajari aku Matematika', 'Rekomendasi Kerja Sampingan', 'Ajari aku bahasa baru']

const NewConversation: React.FC = () => {
  return (
    <div className="w-full h-[90%] flex flex-col justify-center items-center overflow-y-scroll" style={{ scrollbarWidth: 'none'}}>
        <h1 className="font-lexend text-[#EAE9E9] font-bold text-[23px] tracking-wide text-center sm:text-[26px] md:text-[30px] lg:text-[50px] mb-[8px]">Apa yang bisa saya bantu?</h1>
        <div className="w-full flex flex-wrap justify-center gap-[12px] mt-[18px] lg:w-[70%] lg:gap-[18px]">
            {/* ex-prompt */}
            {examplePrompt?.map((prompt, index) => <ExamplePrompt key={index} text={prompt} />)}
        </div>
    </div>
  )
}

export default NewConversation