import { Link } from "react-router-dom"

const Hero: React.FC = () => {
  return (
    <>
    <section id="home">
      <div className="w-[220px] h-[220px] rounded-full absolute left-1/2 -top-[200px] -translate-x-1/2 blur-[200px] bg-primary-white"></div>
      <section className="mt-[130px] w-full">
        <div className="flex flex-col items-center text-center gap-[16px]">
          <h1 className="text-[31px] font-semibold tracking-tighter leading-[137%] font-lexend text-hero-gradient sm:text-[44px] md:text-[55px] lg:text-[70px]">Neobot Ai - Your Personal<br />Ai Chat Assistant</h1>
          <p className="text-[11px] font-normal text-center leading-[200%] text-primary-white sm:text-[14px] lg:text-[16px] md:max-w-[518px] lg:max-w-[718px]">Powered by Qwen2.5-Coder, Neobot is not only smart, it also understands your needs. From small talk to helping you with daily tasks</p>
          <div className="flex items-center gap-4 mt-[16px] lg:mt-[32px]">
              <Link to={'/conversation'} className="text-primary-white border font-medium text-[13px] py-[10px] px-[32px] border-primary-white rounded-full lg:text-[16px] lg:px-[51px] lg:py-[16px] transition-all duration-300 ease-in-out hover:bg-primary-white hover:text-primary-black hover:shadow-lg hover:shadow-primary-white/20 hover:scale-105">Get Started</Link>
              <a href='https://github.com/dimasrisky/neobot-ai' target="_blank" className="text-primary-black bg-primary-white border font-medium text-[13px] py-[10px] px-[32px] rounded-full lg:text-[16px] lg:px-[51px] lg:py-[16px] transition-all duration-300 ease-in-out hover:border-primary-black hover:shadow-lg hover:shadow-primary-black/10 hover:scale-105">View Github</a>
          </div>
        </div>
      </section>

      {/* Preview */}
      <section className="mt-[77px] overflow-hidden">
          <img src="./src/assets/img/hero-image.webp" alt="Desktop Preview" className="object-cover w-full lg:w-[90%] mx-auto" />
      </section>
    </section>
    </>
  )
}

export default Hero