import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";  
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);

const Hero = () => {

  const title = useRef();

  useGSAP(()=> {
    gsap.to('.title', {
      scrollTrigger: {
        trigger: '.title',
        start: 'top 230px',
        endTrigger: '.tools',
        end: 'top center',
        scrub: 1,
        pin: true,
        // markers: true
      },
      duration: 2,
      opacity: 0,
      scale: 0})
  })

  return (
    <header className='mt-24 h-screen'>
      <div ref={title} className='title'>
        <h1 className='text-[#EAE1ED] text-6xl md:text-9xl text-center font-semibold uppercase'>welcome to</h1>
        <h1 className='text-[#EAE1ED] text-6xl md:text-9xl text-center font-semibold uppercase'>frontend Tools</h1>
      </div>
    </header>
  )
}

export default Hero