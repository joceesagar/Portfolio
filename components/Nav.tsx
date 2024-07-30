'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'


const links = [
    { path: '/', name: 'home' },
    { path: '/projects', name: 'my projects' },
    { path: '/contact', name: 'contact' }
]

const Nav: React.FC = () => {
    const path = usePathname()
    return (
        <nav className='hidden xl:flex gap-x-8 items-center'>{
            links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className=' capitalize relative hover:text-primary transition-all'>
                            {link.path === path && (
                                <motion.span initial={{y: '-100%'}} animate={{y:0}} transition={{type:'tween'}} layoutId='underline' className='absolute left-0 top-full h-[2px] bg-primary w-full'/>
                            )}
                        {link.name}
                    </Link>
                )
            })

        }</nav>
    )
}

export default Nav