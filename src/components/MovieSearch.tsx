'use client';

import React, { useState } from 'react';
import { getMovies } from '../services/movieApi';

interface MovieSearchProps {
  onMovieSelect: (movieId: number) => void;
}

const MovieSearch: React.FC<MovieSearchProps> = ({ onMovieSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length >= 3) {
      setLoading(true);
      try {
        const results = await getMovies(query);
        setSearchResults(results.results);
      } catch (error) {
        console.error('Error searching movies:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      {searchQuery.length >= 3 && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto z-10">
          {loading ? (
            <div className="p-4 text-center text-gray-600">Searching...</div>
          ) : searchResults.length === 0 ? (
            <div className="p-4 text-center text-gray-600">No results found</div>
          ) : (
            searchResults.map((movie) => (
              <div
                key={movie.id}
                className="p-4 hover:bg-gray-100 cursor-pointer border-b"
                onClick={() => onMovieSelect(movie.id)}
              >
                <div className="flex items-center">
                  <img
                    src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                    alt={movie.title}
                    className="w-16 h-24 object-cover rounded mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{movie.title}</h3>
                    <p className="text-sm text-gray-600">{movie.release_date}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
