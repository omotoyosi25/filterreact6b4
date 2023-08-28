import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className=' text-white bg-blue-800 fixed top-0 right-0 left-0'>
        <div className='text-center mb-2'>
        <h1 className='text-[100px]'>Foodie</h1>
        <h2>my all time best food</h2>
        </div>
        <ul className='flex justify-between h-[100px] items-center'>
            <Link href='/foods/'>
            <li>Home</li>
            </Link>

            <Link href='/foods/spring'>
            <li>Spring</li>
            </Link>

            <Link href='/foods/fall'>
            <li>Fall</li>
            </Link>

            <Link href='/foods/summer'>
            <li>Summer</li>
            </Link>

            <Link href='/foods/all-year'>
            <li>All Year</li>
            </Link>

        </ul>
    </nav>
  )
}
