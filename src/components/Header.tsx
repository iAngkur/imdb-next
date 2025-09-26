import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'

export default function Header() {
    return (
        <header className='w-screen p-5 bg-blue-400'>
            <nav className='max-w-7xl mx-auto flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-4'>
                    <MenuItem title="Home" address="/" Icon={AiFillHome} />
                    <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
                </div>
                <Link href="/" className='flex justify-center items-center space-x-1'>
                    <span className='text-2xl font-bold py-1 px-2 bg-amber-500 rounded-md'>IMDb</span>
                    <span className='text-xl hidden sm:inline'>Clone</span>
                </Link>
            </nav>
        </header>
    )
}
