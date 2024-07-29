import Link from 'next/link';
import React from 'react'

interface NavProps {
    containerStyles?: string;
    linkStyles?: string;
    underlineStyles?: string;
}

const links = [
    { path: '/', name: 'home' },
    { path: '/projects', name: 'my projects' },
    { path: '/contact', name: 'contact' }
]

const Nav: React.FC<NavProps> = ({ containerStyles, linkStyles, underlineStyles }) => {
    return (
        <nav className={`${containerStyles}`}>{
            links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`capitalize ${linkStyles}`}>
                        {link.name}
                    </Link>
                )
            })

        }</nav>
    )
}

export default Nav