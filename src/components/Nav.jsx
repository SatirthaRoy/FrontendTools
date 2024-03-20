import React from 'react'
import frontend from '../assets/SVGS/FronTend ToolsFT.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/gsap-core'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP,ScrollTrigger);

const Nav = () => {

  useGSAP(()=> {
    gsap.set('.logo',{scale: .9, y: -30 })
    gsap.to('.logo', { scale: 1, y: 0, duration: .7})
    gsap.set('.nav-tool',{scale: .9, y: -30 })
    gsap.to('.nav-tool', { scale: 1, y: 0, duration: .7})
    gsap.set('.nav-button',{scale: .9, y: -30 })
    gsap.to('.nav-button', { scale: 1, y: 0, duration: .7})
  })

  const handleEnter = () => {
    gsap.to('.mf', {scale:0});
    gsap.to('.line', {scaleX: 1, duration: .4, ease: 'power3.inOut'});
  }
  const handleLeave = () => {
    gsap.to('.mf', {scale:1});
    gsap.to('.line', {scaleX: 0, duration: .4, ease: 'power3.inOut'});
  }

  const handleClick = () => {
    const section = document.querySelector('.tools');
    section.scrollIntoView({ behavior: "smooth" });
  }

  const buttonEnter = () => {
    gsap.to('.bg', {scale: 5});
    gsap.to('.nav-button', {color: 'black'});
    gsap.to('.mf', {scale: 0});
  }

  const buttonLeaave = () => {
    gsap.to('.bg', {scale: 0});
    gsap.to('.nav-button', {color: 'white'});
    gsap.to('.mf', {scale: 1});
  }

  return (
    <>
      <div id='glossy' className='z-10'></div>
      <nav className='flex justify-between items-center mt-3 md:mt-6 py-3 md:py-6 w-11/12 mx-auto sticky top-0 z-20'>
        <a href="https://toolsfrontend.netlify.app/" className='cursor-pointer'><img src={frontend} alt="" className='logo w-24 md:w-auto'/></a>
        <h3 onClick={handleClick} onMouseEnter={handleEnter} onMouseLeave={handleLeave} className='nav-tool text-[#F9F7FA] font-semibold text-sm md:text-xl cursor-pointer'>TOOLS
          <div className='line bg-white h-1 w-full origin-left scale-x-0'></div>
        </h3>
        <button onMouseEnter={buttonEnter} onMouseLeave={buttonLeaave} onClick={()=> document.querySelector('footer').scrollIntoView({behavior: 'smooth'})} className='relative nav-button text-white font-semibold text-sm md:text-xl bg-transparent border py-4 px-4 md:px-16 border-white'>
        <div className='bg absolute scale-0 -z-10 left-0 bottom-0 origin-bottom-left rounded-tr-full bg-white size-16'></div>
          CONTACT
        </button>
      </nav>
    </>
  )
}

export default Nav