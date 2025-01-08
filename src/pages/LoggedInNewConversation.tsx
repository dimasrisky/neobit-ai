import React, { useContext, useState } from "react"
import { LogoDark, Send, Plus } from "../assets/Assets"
import { ActiveConversation, Microphone, NewConversation } from '../components/Components'
import { HfInference } from "@huggingface/inference"
import { ChatContext } from "../context/Chat"

const inference = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)

const LoggedInNewConversation: React.FC = () => {
  const { chats, setChats, isLoading, setIsLoading } = useContext(ChatContext)
  const [ inputMessage, setInputMessage ] = useState<string>('')

  async function submitMessage(message: string){
    setInputMessage('')
    if(!message) {
      alert('please fill the input')
      return
    }
    setChats((prev: any) => [...prev, { role: "user", content: message }])

    setIsLoading(true)
    try {
      let out: string = ''
      const result: any = inference.chatCompletionStream({
        model: import.meta.env.VITE_HF_MODEL,
        messages: [...chats, { role: 'user', content: message }],
        max_tokens: 2000,
        temperature: 0.1
      })
      for await (const chunk of result){
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
    <>
      <section id="conversation-page" className="relative min-w-screen min-h-screen bg-primary-black flex">
        {/* Sidebar */}
        <div className="hidden w-[25%] h-screen bg-[#0D0E13] lg:flex flex-col">
            <div className="w-[85%] mx-auto bg-primary-white px-[26px] py-[6px] rounded-[8px] cursor-pointer flex justify-center items-center gap-2 mt-[37px]">
                <Plus />
                <h3 className="font-lexend font-semibold text-[13px] text-primary-black">New conversation</h3>
            </div>
            <div className="mt-[49px] mx-auto">
                <h1 className="font-semibold text-left text-[16px] text-primary-white">Your history</h1>
            </div>
        </div>

        {/* Main Chat */}
        <div className="lg:w-full lg:flex lg:justify-center">
            <div className="w-[90%] flex flex-col items-center mx-auto lg:w-[90%] lg:mx-0">
                <div className="flex items-center gap-[14px] w-full mt-5">
                    <LogoDark style="w-[30px] md:w-[35px]" />
                    <h1 className="text-white font-lexend font-semibold text-[14px] md:text-[18px]">Neobot.ai</h1>
                </div>
                <main className="h-[90vh] pt-5 w-full">
                    {/* Conversation */}
                    {chats?.length > 1 ? <ActiveConversation chats={chats} /> : <NewConversation />}

                    {/* Input Form */}
                    <form action="" className="w-full" onSubmit={(event: any) => {
                        event.preventDefault()
                        submitMessage(inputMessage)
                        }}>
                        <div className="flex px-[22px] mx-auto py-[8px] items-center justify-between w-full text-[12px] text-white bg-secondary-black rounded-full shadow-sm outline-none lg:text-[16px] lg:px-[28px]">
                            <input type="text" name="inputMessage" onChange={event => setInputMessage(event.target.value)} value={inputMessage} required autoComplete="off" autoFocus placeholder="Ketik sesuatu..." className={`outline-none w-[85%] bg-secondary-black h-[100%] ${isLoading && 'cursor-not-allowed'} text-sm`} disabled={isLoading}/>
                            <div className="flex items-center gap-[12px]">
                                <div>
                                    <Microphone setInputMessage={setInputMessage} submitMessage={submitMessage} />
                                </div>
                                <button className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-500/30" type="submit"><Send style="w-[20px] lg:w-[25px]"/></button>
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        </div>
      </section>
    </>
  )
}

export default LoggedInNewConversation