import React from 'react'
import { Navbar, Hero, About, Feature, CallToAction } from '../components/Components'

const Home: React.FC = () => {
  return (
    <>
    <div className='mx-auto w-[85%] xl:w-[1180px]'>
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <CallToAction />
    </div>
    </>
  )
}

export default Home