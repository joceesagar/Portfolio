'use client'
import React, { useEffect, useState } from 'react'
import ThemeToggler from './ThemeToggler'
import Logo from './Logo'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { usePathname } from 'next/navigation'

const Header:React.FC = () => {
  const [header, setHeader] = useState<boolean>(false)
  const pathName = usePathname()
  
  useEffect(()=>{
    const scrollYPos = () =>{
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    }
    //add event listner
    window.addEventListener('scroll', scrollYPos)

    //remove event
    return () => window.removeEventListener('scroll', scrollYPos)
  })
  
  return (
    <header className={` ${header ? 'py-4 bg-white shadow-lg dark:bg-accent':'py-6 bg-transparent'} sticky top-0 z-30 transition-all ${pathName === '/' && 'bg-[#fef9f5] dark:bg-inherit'}` }>
      <div className=' container'>
        <div className='flex justify-between top-0 items-center'>
          <Logo />
          <div className='flex items-center gap-x-6'>
            <Nav/>
            <ThemeToggler />
            <div className=' xl:hidden'>
              <MobileNav/>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header