import React from 'react'
import linkedin from '../assets/SVGS/LinkedIn Circledlinked in.svg'
import facebook from '../assets/SVGS/Facebookfacebook.svg'
import github from '../assets/SVGS/GitHubgit.svg'

const Footer = () => {
  return (
    <footer className='h-screen flex flex-col items-center justify-center gap-12'>
      <div className='text-[#ECE4EF] text-2xl text-center'>
        <h2 className='font-normal'>MADE BY</h2>
        <h2 className='font-semibold'>SATIRTHA ROY</h2>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='font-normal text-[#ECE4EF] text-2xl text-center'>SOCIALS</h2>
        <div className='flex gap-6'>
          <a href="facebook.com" target='_blank'><img src={facebook} alt="" className=' size-16'/></a>
          <a href="facebook.com" target='_blank'><img src={github} alt="" className=' size-16'/></a>
          <a href="facebook.com" target='_blank'><img src={linkedin} alt="" className=' size-16'/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer