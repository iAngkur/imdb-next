import React from 'react'

export default function Movies({ movies }: { movies: any }) {

    if (movies.length === 0) {
        return <div>No movies found.</div>;
    }

    return (
        <div className="max-w-7xl mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {movies.map(m => (
                <MovieCard key={m.id} movie={m} />
            ))}
        </div>
    )
}


function MovieCard({ movie }: { movie: any }) {
    const { title, name, overview } = movie;

    return <div className="transform hover:scale-105 transition duration-300 p-4 shadow-md shadow-amber-500 rounded-lg">
        <h2 className="text-lg font-bold">{title || name}</h2>
        <p className="text-gray-400">{overview}</p>
    </div>
}
