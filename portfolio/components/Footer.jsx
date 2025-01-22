import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Footer({isDarkMode}) {
  return (
    <div className='mt-20'>
      <div className='text-center '>
      <p className=' font-Ovo font-bold  cursor-pointer w-36 mx-auto mb-2 dark:text-white'>Bisrat</p>
      <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src={assets.mail_icon} alt='' className='w-6'/>
        zerbisrat@gmail.com
      </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t
      border-gray-400 mx-[10%] mt-12 py-6'>
        <p>@ 2025 Bisrat Mengesha. All rights reserved.</p>
        <ul className='flex items-center gap-40 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href='https://github.com/Hellobisrat'>GitHub</a></li>
          <li><a  target='_blank' href='https://www.linkedin.com/in/bisrat-zerihun-6922a378'>LinkedIn</a></li>
          
        </ul>
      </div>
    </div>
  )
}

export default Footer