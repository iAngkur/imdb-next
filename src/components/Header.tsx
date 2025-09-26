import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import { MdOutlineDarkMode } from 'react-icons/md'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
    return (
        <header className='w-full px-4 py-3 bg-blue-400'>
            <nav className='max-w-7xl mx-auto flex flex-row justify-between items-center text-white'>
                <div className='flex flex-row gap-4'>
                    <MenuItem title="Home" address="/" Icon={AiFillHome} />
                    <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
                </div>
                <div className='flex items-center gap-4'>
                    <DarkModeSwitch />
                    <Link href="/" className='flex justify-center items-center gap-2'>
                        <span className='text-2xl font-bold py-1 px-2 bg-amber-500 rounded-md'>IMDb</span>
                        <span className='text-xl hidden sm:inline'>Clone</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
} 
