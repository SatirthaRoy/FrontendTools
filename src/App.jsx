import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Tools from "./components/Tools"
import Footer from "./components/Footer"
import gsap from "gsap/gsap-core"
import { MdArrowOutward } from "react-icons/md";
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP,ScrollTrigger);

function App() {

  const handleMove = (e) => {
    console.log('hovering');
    gsap.to('.ball', {x: e.clientX, y: e.clientY, duration: .7})
  }

  useGSAP(()=> {
    gsap.set('.circle', {scale: .3, y: 100})
    gsap.to('.circle', {scale: 1, y: 0, duration: 1})
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.tools',
        start: 'top bottom',
        endTrigger: '.tools',
        end: '400px bottom',
        scrub: 1
      }
    })
    tl.to('.ball', { scale: .7, y: '70vh' })
    .to( '.ball', { scale: 1 } )
    // mouse follower
    document.querySelector('#root').addEventListener('mousemove', handleMove);

    // mouse follower
    document.body.addEventListener('mouseenter', ()=> {
      gsap.to('.mf', {scale: 1})
    });

    document.body.addEventListener('mouseleave', ()=> {
      gsap.to('.mf', {scale: 0})
    });

    document.body.addEventListener('mousemove', (e)=> {
      gsap.to('.mf', { x: e.clientX, y: e.clientY, duration: .5 })
    });
  })

  return (
    <>
      <div className="mf fixed scale-0 rounded-full size-5 bg-white z-30 pointer-events-none flex items-center justify-center">
        <div className="arrow scale-0 text-base"><MdArrowOutward/></div>
      </div>
      <div className="top-0 fixed w-screen h-screen flex flex-col justify-center items-center -z-10">
        <div className="ball size-[360px] bg-white rounded-full blur-[200px]"> manger beta</div>
        <div className="circle size-[400px] md:size-[560px] bg-white rounded-full blur-[250px]"> manger beta</div>
      </div>
      <Nav/>
      <Hero/>
      <Tools/>
      <Footer/>
    </>
  )
}

export default App
