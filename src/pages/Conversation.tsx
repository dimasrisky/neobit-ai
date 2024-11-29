import React, { useContext } from "react"
import { LogoDark, Send } from "../assets/Assets"
import { ActiveConversation, NewConversation } from '../components/Components'
import { HfInference } from "@huggingface/inference"
import { ChatContext } from "../context/Chat"

const inference = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)

const Conversation: React.FC = () => {
  const { chats, setChats, setIsLoading } = useContext(ChatContext)

  async function submitMessage(event: any){
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    event.target.reset()
    const message = formData.get('inputMessage')
    if(typeof message != 'string') {
      alert('input invalid')
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
      <section id="conversation-page" className="relative min-w-screen min-h-screen bg-primary-black">
        <div className="flex items-center gap-[14px] absolute top-6 left-6">
          <LogoDark style="w-[30px] md:w-[35px]" />
          <h1 className="text-white font-lexend font-semibold text-[14px] md:text-[17px]">Neobot.ai</h1>
        </div>
        <div className="w-[90%] mx-auto flex flex-col items-center">
          {/* Logo */}

          <main className="h-[90vh] w-[90%] absolute bottom-2 pt-5 lg:w-[950px] lg:bottom-5">
          {/* Conversation */}
          {chats?.length != 0 ? <ActiveConversation chats={chats} /> : <NewConversation />}

          {/* Input Form */}
            <form action="" className="w-full" onSubmit={submitMessage}>
              <div className="flex px-[22px] mx-auto py-[12px] items-center justify-between w-full text-[12px] text-white bg-secondary-black rounded-full shadow-sm outline-none lg:text-[16px] lg:px-[28px]">
                <input type="text" name="inputMessage" autoFocus placeholder="Ketik sesuatu..." className="outline-none w-[85%] bg-secondary-black h-[100%]"/>
                <div className="flex items-center gap-[12px]">
                  <button type="submit"><Send style="w-[20px] lg:w-[30px]"/></button>
                </div>
              </div>
            </form>
          </main>
        </div>
      </section>
    </>
  )
}

export default Conversation