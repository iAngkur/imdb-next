import Image from 'next/image'
import React from 'react'
import loadingImg from '../../public/loading.svg'

export default function loading() {
    return (
        <div className='flex justify-center'>
            <Image src={loadingImg} alt='loading' className='h-52' />
        </div>
    )
}
