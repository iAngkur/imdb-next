
import React from 'react'
import TabItem from './TabItem'

export default function Tab() {

    return (
        <div aria-label='Tabs' className='p-4 flex flex-row justify-center items-center gap-8'>
            <TabItem title='Trending' />
            <TabItem title='Top Rated' />
        </div>
    )
}
