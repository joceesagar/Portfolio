'use client'
import { Divide } from 'lucide-react'
import Link from 'next/link'
import {
  RiLinkedinFill,
   RiGithubFill,
     RiInstagramFill,
     RiFacebookFill,
     RiTwitterXFill
    } from 'react-icons/ri'

const Socials = () => {
  const icons = [
    {
      path: '/',
      name: <RiTwitterXFill/>
    },
    {
      path: '/',
      name: <RiLinkedinFill/>
    },
    {
      path: '/',
      name: <RiGithubFill/>
    },
    {
      path: '/',
      name: <RiFacebookFill/>
    },
    {
      path: '/',
      name: <RiInstagramFill/>
    },
  ]
  return (
    <div className='flex gap-x-6 mx-auto xl:mx-0'>
      {icons.map((icon,index)=>{
        return <Link href={icon.path} key={index}>
        <div className='text-foreground text-[22px] hover:text-primary transition-all'>{icon.name}</div>
        </Link>

      })}
    </div>
  )
}

export default Socials