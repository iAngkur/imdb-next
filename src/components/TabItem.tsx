'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';


export default function TabItem({ title, param }: { title: string, param: string }) {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre') || 'fetchTrending';
    console.log('genre', genre)
    return (
        <Link href={`/?genre=${param}`} className={`${genre?.toLowerCase() === param.toLowerCase() ? "border-b-2 border-amber-500 scale-105" : ""} cursor-pointer scale-100 transition-all duration-200`}>{title}</Link>
    )
}
