
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
      filter: 'blur(100px)',
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
    <footer className='h-screen mx-auto max-w-[2000px] flex flex-col items-center justify-center gap-12'>
      <div className='text-[#ECE4EF] text-lg md:text-2xl text-center'>
        <h2 className='black font-normal'>MADE BY</h2>
        <h2 className='black font-semibold'>SATIRTHA ROY</h2>
      </div>
      <div className='flex flex-col justify-center items-center gap-3'>
        <h2 className='black font-normal text-[#ECE4EF] text-lg md:text-2xl text-center'>SOCIALS</h2>
        <div className='flex gap-3 md:gap-6'>
          <a href="https://www.facebook.com/satirtha.royhimu/" target='_blank'><FaFacebook className='black size-10 md:size-16 text-white'/></a>
          <a href="https://github.com/SatirthaRoy" target='_blank'><FaGithub className='black size-10 md:size-16 text-white'/></a>
          <a href="https://www.linkedin.com/in/satirtha-roy-14baa02bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app&fbclid=IwAR2cJGard4Ht0LqD4ZToBmo9Y1_X4wmRPrrPndRyVF68ij4wzHyzeo6rMu0" target='_blank'><FaLinkedin className='black size-10 md:size-16 text-white'/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer