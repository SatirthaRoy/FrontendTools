import adobe from '../assets/SVGS/adobe colors.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/gsap-core'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react';

gsap.registerPlugin(useGSAP,ScrollTrigger);

const buttons = [
  {
    category: 'ALL',
    show: 'all'
  },
  {
    category: 'AI',
    show: 'ai'
  },
  {
    category: 'COLOR',
    show: 'color'
  },
  {
    category: 'DESIGN',
    show: 'design'
  },
  {
    category: 'ICONS',
    show: 'icons'
  },
  {
    category: 'INSPIRATION',
    show: 'inspiration'
  },
  {
    category: 'TOOLS',
    show: 'tools'
  },
  {
    category: 'UI',
    show: 'ui'
  },
  {
    category: 'YT CHANNELS',
    show: 'yt-channels'
  }
]


const Tool = () => {

  const tool = useRef();
  const h2 = useRef();
  const h3 = useRef();
  const cardImg = useRef();

  const handleEnter = (e) => {
    gsap.to('.arrow', { scale: 1 })
    gsap.to('.mf', {scale:4});
    gsap.to(tool.current, {backgroundColor: 'white'});
    gsap.to(h2.current, { color: '#272328'});
    gsap.to( h3.current, {color: 'white', backgroundColor: 'black'});
    gsap.to(cardImg.current, {filter: 'invert(1)'});
  }

  const handleLeave = (e) => {
    gsap.to('.arrow', { scale: 0 })
    gsap.to('.mf', {scale: 1});
    gsap.to(tool.current, {backgroundColor: 'transparent'});
    gsap.to(h2.current, { color: '#ECE4EF'});
    gsap.to( h3.current, {color: '#272328', backgroundColor: '#F9F7FA'});
    gsap.to(cardImg.current, {filter: 'invert(0)'});
  }

  return (
    <div ref={tool} onMouseEnter={handleEnter} onMouseLeave={handleLeave} className='tool border-white border space-y-20 p-7'>
      <div className='px-8 py-3 md:px-12 md:py-5'>
        <img ref={cardImg} src={adobe} alt="" className='w-full'/>
      </div>

      <div className='space-y-6'>
        <h2 ref={h2} className='text-[#ECE4EF] uppercase font-semibold text-xl md:text-2xl'>ADOBE COLORS</h2>
        <div className='flex justify-between items-center'>
          <h3 ref={h3} className='bg-[#F9F7FA] text-[#272328] uppercase font-normal text-sm md:text-base px-4 inline-block'>COLOR</h3>
        </div>
      </div>
    </div>
    
  )
}


const Tools = () => {

  useGSAP(()=> {
    gsap.to('.char', {
      scrollTrigger: {
        trigger: '.chars',
        toggleActions: 'play none none none',
        start: 'bottom bottom',
        end: 'center center',
        scrub: 1
      },
      y: 0,
      stagger: .05
    });

  });


  return (
    <div className='tools uppercase gap-10 w-11/12 mx-auto flex flex-col justify-center items-center'>
      <div className='chars flex text-[#ECE4EF] font-semibold text-4xl md:text-7xl text-center *:translate-y-20'>
        <div className='char'>T</div>
        <div className='char'>O</div>
        <div className='char'>O</div>
        <div className='char'>L</div>
        <div className='char'>S</div>
      </div>
      <p className='uppercase text-[#ECE4EF] text-center text-lg md:text-2xl font-normal'>important tools to make your development journey smooth.</p>

      <div className='flex flex-wrap justify-center items-center gap-6 w-11/12'>
        {buttons.map((button,i)=> {
          return <button key={i} className='z-[5] transition-all hover:scale-105 px-4 py-2 md:py-3 md:px-8 border-white border text-[#FEF8F8] text-base md:text-xl font-semibold'>{button.category}</button>
        })}
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full mt-14 z-[5]'>
        <Tool/>
        <Tool/>
        <Tool/>
        <Tool/>
        <Tool/>
        <Tool/>
      </div>
    </div>
  )
}

export default Tools