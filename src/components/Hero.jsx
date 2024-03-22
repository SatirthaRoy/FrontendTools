import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";  
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);

const Hero = () => {

  const title = useRef();

  useGSAP(()=> {
    let bodyTop = document.body.getBoundingClientRect().top;
    let titleText = document.querySelector('.title-text');
    let eltop = titleText.getBoundingClientRect().top;
    let d = (eltop - bodyTop);
    console.log(d);
    gsap.set( '.title-text' , {y: 250})
    gsap.to( '.title-text', {duration: 1.5, y: 0, stagger: 0.1, ease: 'power4.out'})
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: title.current,
        start: ()=> `top ${d}px`,
        endTrigger: title.current,
        end: '+=1000',
        scrub: 1,
        pin: true
      }
    })
    tl.to('.title-text', { y: 250 })


  }, {scope: [title]})

  return (
    <header className='mt-24 mx-auto max-w-[2000px] h-screen'>
      <div ref={title} className='titlez-0'>
        <div className='clips'><h1 className='title-text text-[#EAE1ED] text-6xl md:text-7xl lg:text-9xl text-center font-semibold uppercase '>welcome to</h1></div>
        <div className='clips'><h1 className='title-text title-bottom text-[#EAE1ED] text-6xl md:text-7xl lg:text-9xl text-center font-semibold uppercase '>frontend Tools</h1></div>
      </div>
    </header>
  )
}

export default Hero