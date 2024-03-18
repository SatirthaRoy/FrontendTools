import React from 'react'
import adobe from '../assets/SVGS/adobe colors.svg'


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
    category: 'YT CHANNELS',
    show: 'yt-channels'
  }
]


const Tool = () => {
  return (
    <div className='border-white border space-y-20 p-7'>
      <div className=' px-12 py-5'>
        <img src={adobe} alt="" className='w-full'/>
      </div>

      <div className='space-y-6'>
        <h2 className='text-[#ECE4EF] font-semibold text-2xl'>ADOBE COLORS</h2>
        <div className='bg-[#F9F7FA] text-[#272328] font-normal text-base px-4 inline-block'>COLOR</div>
      </div>
    </div>
  )
}


const Tools = () => {
  return (
    <div className='uppercase gap-10 w-11/12 mx-auto flex flex-col justify-center items-center'>
      <h1 className='text-[#ECE4EF] font-semibold md:text-7xl text-center'>Tools</h1>
      <p className='uppercase text-[#ECE4EF] text-center text-2xl font-normal'>important tools to make your development journey smooth.</p>

      <div className='flex flex-wrap justify-center items-center gap-6 w-11/12'>
        {buttons.map((button,i)=> {
          return <button className='py-3 px-8 border-white border text-[#FEF8F8] text-xl font-semibold'>{button.category}</button>
        })}
      </div>

      <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 w-full mt-14'>
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