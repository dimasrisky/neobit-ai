/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import useSpeechToText from 'react-hook-speech-to-text'

interface MicrophoneProps {
    setInputMessage: React.Dispatch<React.SetStateAction<string>>,
    submitMessage: (message: string) => void
}

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const MicrophoneOFF: React.FC = () => {
    return (
        <div className="flex justify-center items-center transition-all duration-[300ms] z-[4] w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-mic-fill" viewBox="0 0 16 16">
                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"></path>
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"></path>
            </svg>
        </div>
    )
}

const MicrophoneON: React.FC = () => {
    return (
     <div className="relative">
        <svg className="w-[19px] h-[19px] lg:w-[22px] lg:h-[22px]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M416 464H96a48.05 48.05 0 0 1-48-48V96a48.05 48.05 0 0 1 48-48h320a48.05 48.05 0 0 1 48 48v320a48.05 48.05 0 0 1-48 48Z" fill="#d0d2e3" className="fill-000000"></path>
        </svg>

        {/* Tooltip selalu muncul */}
        <div className="absolute flex items-center gap-2 bottom-9 left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black text-white text-xs font-medium py-1 px-2 rounded opacity-100">
            <svg className='w-5' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10Zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8Z" fill="#fa5a5a" className="fill-464646"></path><rect fill="#fa5a5a" height="6" rx="1.88" width="6" x="9" y="9" className="fill-464646"></rect></svg>
            Recording...
        </div>
    </div>
    )
}

const Microphone: React.FC<MicrophoneProps> = ({ setInputMessage, submitMessage }) => {
    const { results, error, isRecording, startSpeechToText, stopSpeechToText, setResults } = useSpeechToText({ continuous: false, timeout: 3000, useLegacyResults: false })
    function microphoneClicked(){
        if(error){
            alert(`Error: ${error}`)
            console.log(error)
            return
        }
        if(!isRecording) startSpeechToText()
        if(isRecording) stopSpeechToText()
    }
    useEffect(() => {
        (async () => {
            let outputMessage: string = ''
            if(results && isRecording){
                results.map(result => {
                    if (typeof result === 'object' && 'transcript' in result){
                        outputMessage += result.transcript
                    }
                })
                if(outputMessage === '') return
                setInputMessage(outputMessage)
                await delay(500)
                submitMessage(outputMessage)
                setResults([])
            }
        })()
    }, [results])
  return (
    <>
        <div onClick={microphoneClicked} className="relative w-10 h-10 flex justify-center items-center bg-[#1c1f28] text-white rounded-full cursor-pointer transition-all duration-[300ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] lg:w-12 lg:h-12">
            { isRecording ? <MicrophoneON/> : <MicrophoneOFF/> }
        </div>
    </>
  )
}

export default Microphone