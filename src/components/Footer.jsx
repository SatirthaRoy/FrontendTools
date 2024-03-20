import React from 'react'
import linkedin from '../assets/SVGS/LinkedIn Circledlinked in.svg'
import facebook from '../assets/SVGS/Facebookfacebook.svg'
import github from '../assets/SVGS/GitHubgit.svg'
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
        scrub: 1,
        markers: true
      },
      scale: 4
    })

    gsap.to('.black', {
      scrollTrigger: {
        trigger: 'footer',
        start: 'center bottom',
        scrub: 1,
        markers: true
      },
      color: 'black'
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
          <a href="https://www.facebook.com/satirtha.royhimu/" target='_blank'><img src={facebook} alt="" className='size-10 md:size-16'/></a>
          <a href="https://www.facebook.com/satirtha.royhimu/" target='_blank'><img src={github} alt="" className='size-10 md:size-16'/></a>
          <a href="https://www.facebook.com/satirtha.royhimu/" target='_blank'><img src={linkedin} alt="" className='size-10 md:size-16'/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer