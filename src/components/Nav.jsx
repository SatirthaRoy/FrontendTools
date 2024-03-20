import React from 'react'
import frontend from '../assets/SVGS/FronTend ToolsFT.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/gsap-core'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP,ScrollTrigger);

const Nav = () => {

  useGSAP(()=> {
    gsap.set('.logo',{scale: .9, y: -30 })
    gsap.to('.logo', { scale: 1, y: 0, duration: 1})
    gsap.set('.nav-tool',{scale: .9, y: -30 })
    gsap.to('.nav-tool', { scale: 1, y: 0, duration: 1})
    gsap.set('.nav-button',{scale: .9, y: -30 })
    gsap.to('.nav-button', { scale: 1, y: 0, duration: 1})
  })

  return (
    <>
      <div id='glossy' className='z-10'></div>
      <nav className='flex justify-between items-center mt-3 md:mt-6 py-3 md:py-6 w-11/12 mx-auto sticky top-0 z-20'>
        <img src={frontend} alt="" className='logo w-24 md:w-auto'/>
        <h3 className='nav-tool text-[#F9F7FA] font-semibold text-sm md:text-xl cursor-pointer'>TOOLS
          <div className='bg-white h-1 w-full'></div>
        </h3>
        <button className='nav-button text-white font-semibold text-sm md:text-xl bg-transparent hover:bg-white border hover:text-[#272328] py-4 px-4 md:px-16 border-white'>CONTACT</button>
      </nav>
    </>
  )
}

export default Nav