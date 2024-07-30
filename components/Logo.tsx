import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Logo = () => {
  return <Link href='/'>
    <Image src='/Logo.svg' width={84} height={84} priority alt='logo'/>
  </Link>
}

export default Logo