import Link from 'next/link'
import React from 'react'

const Headers = () => {
  return (
    <div className='flex gap-3'>
        <Link href='/'>Главная</Link>
        <Link href='/about'>Обо мне</Link>
    </div>
  )
}

export default Headers