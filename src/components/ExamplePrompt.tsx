import React, { useContext } from 'react'
import { Pencil } from '../assets/Assets'
import { ChatContext } from '../context/Chat'
import { HfInference } from '@huggingface/inference'
interface ExampleProps {
  text: string
}

const inference = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)
const ExamplePrompt: React.FC<ExampleProps> = ({ text }) => {
  const { chats, setChats, setIsLoading } = useContext(ChatContext)
  async function sendMessage(message: string){
    if(typeof message != 'string') {
      alert('input invalid')
      return
    }
    setChats((prev: any) => [...prev, { role: "user", content: message }])

    setIsLoading(true)
    try {
      let out: string = ''
      const result = inference.chatCompletionStream({
        model: import.meta.env.VITE_HF_MODEL,
        messages: [...chats, { role: 'user', content: message }],
        max_tokens: 2000
      })
      for await (const chunk of result){
        console.log(chunk.choices[0].delta.content)
        out += chunk.choices[0].delta.content
      }
      setChats((prev: any) => [...prev, { role: 'assistant', content: out }])
      setIsLoading(false)
    }catch(error){
      setChats((prev: any) => [...prev, { role: 'user', content: error }])
      alert('Error!')
      setIsLoading(false)
    } 
  }
  return (
    <div onClick={() => sendMessage(text)} className="flex items-center gap-[8px] px-[12px] py-[8px] border border-[#f1f1f1] rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_0px_0px_0.5px_#ffffff]">
        <Pencil style='w-[12px]' />
        <h5 className="text-[#f1f1f1] text-[11px]">{ text }</h5>
    </div>
  )
}

export default ExamplePrompt