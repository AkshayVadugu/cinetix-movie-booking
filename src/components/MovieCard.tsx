'use client';

import React from 'react';
import { getImageUrl } from '../services/movieApi';

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
  };
  onClick: (id: number) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  const formattedDate = new Date(movie.release_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div 
      className="group relative cursor-pointer transition-transform duration-200 hover:scale-105"
      onClick={() => onClick(movie.id)}
    >
      <div className="aspect-w-2 aspect-h-3 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          className="h-full w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-80"
        />
      </div>
      <div className="mt-2 flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold text-gray-900">{movie.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{formattedDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
