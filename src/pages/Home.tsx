import React from 'react'
import { Navbar, Hero } from '../components/Components'

const Home: React.FC = () => {
  return (
    <>
    <div className='mx-auto w-[85%] xl:w-[1180px]'>
      <Navbar />
      <Hero />
    </div>
    </>
  )
}

export default Home