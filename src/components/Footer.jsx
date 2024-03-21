import React from 'react'

import { FaFacebook ,FaGithub ,FaLinkedin  } from "react-icons/fa";

import { useGSAP } from '@gsap/react'
import gsap from 'gsap/gsap-core'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP,ScrollTrigger);

const Footer = () => {
  useGSAP(()=> {
    gsap.to('.circle', {
      scrollTrigger: {
        trigger: 'footer',
        start: 'center bottom',
        scrub: 1
      },
      scale: 4,
      filter: 'blur(100px)'
    })

    gsap.to('.black', {
      scrollTrigger: {
        trigger: 'footer',
        start: 'center bottom',
        scrub: 1
      },
      color: '#000000'
    })
  })

  return (
    <footer className='h-screen flex flex-col items-center justify-center gap-12'>
      <div className='text-[#ECE4EF] text-lg md:text-2xl text-center'>
        <h2 className='black font-normal'>MADE BY</h2>
        <h2 className='black font-semibold'>SATIRTHA ROY</h2>
      </div>
      <div className='flex flex-col justify-center items-center gap-3'>
        <h2 className='black font-normal text-[#ECE4EF] text-lg md:text-2xl text-center'>SOCIALS</h2>
        <div className='flex gap-3 md:gap-6'>
          <a href="https://www.facebook.com/satirtha.royhimu/" target='_blank'><FaFacebook className='black size-10 md:size-16 text-white'/></a>
          <a href="https://www.facebook.com/satirtha.royhimu/" target='_blank'><FaGithub className='black size-10 md:size-16 text-white'/></a>
          <a href="https://www.facebook.com/satirtha.royhimu/" target='_blank'><FaLinkedin className='black size-10 md:size-16 text-white'/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer