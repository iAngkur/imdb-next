import React from 'react'
import Link from 'next/link'

interface MenuItemProps {
    title: string;
    address: string;
    Icon: React.ComponentType<any>;
}

export default function MenuItem({ title, address, Icon }: MenuItemProps) {
    return (
        <Link href={address} className='hover:text-amber-500 focus:text-amber-500 focus:outline-none'>
            <span className='sr-only'>{title}</span>
            <Icon className="sm:hidden text-2xl" />
            <span className='hidden sm:inline uppercase text-sm'>{title}</span>
        </Link>
    )
}
