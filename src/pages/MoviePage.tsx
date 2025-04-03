import React, { useState, useEffect } from 'react';
import { Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import MovieSearch from '../components/MovieSearch';
import MovieDetails from '../components/MovieDetails';
import { getMovies } from '../services/movieApi';

const MoviePage: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies();
        setMovies(response.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieSelect = (movieId: number) => {
    const movie = movies.find((m) => m.id === movieId);
    if (movie) {
      setSelectedMovie(movie);
      setShowDetails(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Now Showing</h1>
          <MovieSearch onMovieSelect={handleMovieSelect} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={handleMovieSelect}
            />
          ))}
        </div>
      </div>

      {showDetails && selectedMovie && (
        <MovieDetails movie={selectedMovie} />
      )}
    </div>
  );
};

export default MoviePage;