'use client'

import React, { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error, reset: () => void }) {

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className='text-center mt-20'>
            <h2 className="text-red-600">Something went wrong</h2>
            <button onClick={reset} className="text-amber-500 underline cursor-pointer">Try again</button>
        </div>
    )
}
