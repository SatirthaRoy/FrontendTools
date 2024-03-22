import { useGSAP } from '@gsap/react'
import gsap from 'gsap/gsap-core'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(useGSAP,ScrollTrigger);

const Tool = ({toolObj}) => {

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
    <a href={toolObj.link} target='_blank' ref={tool} onMouseEnter={handleEnter} onMouseLeave={handleLeave} className='flex flex-col tool border-white border space-y-20 p-7'>
      <div className='px-8 py-3 md:px-12 md:py-5 flex justify-center items-center flex-grow'>
        <img ref={cardImg} src={toolObj.img_link} alt="" className='w-full h-96'/>
      </div>

      <div className='space-y-6'>
        <h2 ref={h2} className='text-[#ECE4EF] uppercase font-semibold text-xl md:text-2xl'>{toolObj.name}</h2>
        <div className='flex justify-between items-center'>
          <h3 ref={h3} className='bg-[#F9F7FA] text-[#272328] uppercase font-normal text-sm md:text-base px-4 inline-block'>{toolObj.category}</h3>
        </div>
      </div>
    </a>
    
  )
}


const Tools = () => {

  const [tools, setTools] = useState({
    all: [],
    ai: [],
    color: [],
    hosting: [],
    icons: [],
    inspiration: [],
    tool: [],
    ui: []
  });

  const [showCategory, setShowCategory] = useState('all');

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

  useEffect(()=> {
    fetch('/tools.json')
    .then(res => res.json())
    .then(data => {
      setTools({
        all: data,
        ai: data.filter((singleData => singleData.category.toLowerCase() === 'ai')),
        color: data.filter((singleData => singleData.category.toLowerCase() === 'color')),
        hosting: data.filter((singleData => singleData.category.toLowerCase() === 'hosting')),
        icons: data.filter((singleData => singleData.category.toLowerCase() === 'icons')),
        inspiration: data.filter((singleData => singleData.category.toLowerCase() === 'inspiration')),
        tool: data.filter((singleData => singleData.category.toLowerCase() === 'tool')),
        ui: data.filter((singleData => singleData.category.toLowerCase() === 'ui'))
      });
    });
  }, [])


  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  })

  console.log(tools);

  return (
    <div className='tools uppercase gap-10 max-w-[2000px] w-11/12 mx-auto flex flex-col justify-center items-center'>
      <div className='chars flex text-[#ECE4EF] font-semibold text-4xl md:text-7xl text-center *:translate-y-20'>
        <div className='char'>T</div>
        <div className='char'>O</div>
        <div className='char'>O</div>
        <div className='char'>L</div>
        <div className='char'>S</div>
      </div>
      <p className='uppercase text-[#ECE4EF] text-center text-lg md:text-2xl font-normal'>important tools to make your development journey smooth.</p>

      <div className='flex flex-wrap justify-center items-center gap-6 w-11/12'>
        {Object.keys(tools).map((button, i)=> {
          return <button onClick={() =>{
            setShowCategory(button);
            gsap.fromTo('.tool', {
              opacity: 0,
              duration: .5
            }, {
              opacity: 1,
            })
          }} key={i} className={`z-[5] transition-all hover:scale-105 px-4 py-2 md:py-3 md:px-8 ${button === showCategory ? 'bg-white text-black' : 'text-[#FEF8F8]'} border-white border text-base md:text-xl font-semibold uppercase`}>{`${button} (${tools[button].length})`}</button>
        })}
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full mt-14 z-[5]'>
        {tools[showCategory].map((tool, i) => {
          if(i === tools[showCategory].length - 1) {
            console.log('last item');
          }
          return <Tool toolObj={tool}/>
        })}
      </div>
    </div>
  )
}

export default Tools