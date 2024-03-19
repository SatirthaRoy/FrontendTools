import React from 'react'
import frontend from '../assets/SVGS/FronTend ToolsFT.svg'

const Nav = () => {
  return (
    <>
      <div id='glossy' className='z-40'></div>
      <nav className='flex justify-between items-center mt-3 md:mt-6 py-3 md:py-6 w-11/12 mx-auto sticky top-0 z-50'>
        <img src={frontend} alt="" className='w-24 md:w-auto'/>
        <h3 className='text-[#F9F7FA] font-semibold text-sm md:text-xl cursor-pointer'>TOOLS
          <div className='bg-white h-1 w-full'></div>
        </h3>
        <button className='text-white font-semibold text-sm md:text-xl bg-transparent hover:bg-white border hover:text-[#272328] py-4 px-4 md:px-16 border-white'>CONTACT</button>
      </nav>
    </>
  )
}

export default Nav