import React from 'react'
import logo from '../../assets/other/logo.svg'
import github from '../../assets/other/github.svg'
import twitter from '../../assets/other/twitter.svg'
const Footer = () => {
  return (
    <div className='w-full h-15 bottom-0'>
        <div className='flex justify-center items-center w-full h-full '>
            <span className='flex justify-center items-center text-white text-xs xl:text-xs lg:text-xs md:text-xs sm:text-xs'>
            <img src={logo} height={100} />
           <span> <span className='text-purple'>Question</span><br/> Quest</span>
            </span>
            <div className='flex-1 text-center text-white text-xs xl:text-xs lg:text-xs md:text-xs sm:text-xs'>
            © Copyright 2021, All Rights Reserved by <span className='text-purple'>Cassiopeia</span>
            </div>
            <div className='flex gap-2 text-center text-white text-xs xl:text-xs lg:text-xs md:text-xs sm:text-xs pr-2'>Follow us <img src={github}/><img src={twitter}/></div>
        </div>
    </div>
  )
}

export default Footer