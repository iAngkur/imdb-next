'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';


export default function TabItem({ title }: { title: string }) {
    const params = useSearchParams();
    const genre = params.get('genre');
    return (
        <Link href={`/?genre=${title.toLowerCase()}`} className={`${genre?.toLowerCase() === title.toLowerCase() ? "border-b-2 border-amber-500 scale-105" : ""} cursor-pointer scale-100 transition-all duration-200`}>{title}</Link>
    )
}
