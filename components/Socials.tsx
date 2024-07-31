'use client'
import { Divide } from 'lucide-react'
import Link from 'next/link'
import React from 'react';
import {
  RiLinkedinFill,
   RiGithubFill,
     RiInstagramFill,
     RiFacebookFill,
     RiTwitterXFill
    } from 'react-icons/ri'

    interface styles{
      containerStyles ?: string;
      iconStyles: string;
  }

const Socials:React.FC<styles> = ({containerStyles, iconStyles}) => {
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
    <div className={`${containerStyles}`}>
      {icons.map((icon,index)=>{
        return <Link href={icon.path} key={index}>
        <div className={`${iconStyles}`}>{icon.name}</div>
        </Link>

      })}
    </div>
  )
}

export default Socials