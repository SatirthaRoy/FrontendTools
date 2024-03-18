import React from 'react'
import frontend from '../assets/SVGS/FronTend ToolsFT.svg'

const Nav = () => {
  return (
    <nav className='flex justify-between items-center mt-6 py-6 w-11/12 mx-auto sticky top-0'>
      <img src={frontend} alt="" />
      <h3 className='text-[#F9F7FA] font-semibold text-xl cursor-pointer'>TOOLS
        <div className='bg-white h-1 w-full'></div>
      </h3>
      <button className='text-white font-semibold text-xl bg-transparent hover:bg-white hover:text-[#272328] py-4 md:px-16 border-white'>CONTACT</button>
    </nav>
  )
}

export default Nav