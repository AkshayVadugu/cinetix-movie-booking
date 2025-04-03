'use client';

import React from 'react';

interface MovieDetailsProps {
  movie: {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
  };
}

const theaters = [
  {
    name: 'Cineplex Grand',
    location: 'Downtown',
    features: ['IMAX', 'Dolby Atmos', 'Premium Seating'],
    showTimes: [
      { time: '10:00 AM', availableSeats: 150 },
      { time: '1:30 PM', availableSeats: 120 },
      { time: '5:00 PM', availableSeats: 180 },
      { time: '8:30 PM', availableSeats: 160 },
    ],
  },
  {
    name: 'Regal Cinema',
    location: 'Midtown',
    features: ['4K Projection', 'Reclining Seats', 'Food Delivery'],
    showTimes: [
      { time: '11:00 AM', availableSeats: 140 },
      { time: '2:30 PM', availableSeats: 130 },
      { time: '6:00 PM', availableSeats: 170 },
      { time: '9:30 PM', availableSeats: 150 },
    ],
  },
];

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-gray-600">{movie.overview}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {theaters.map((theater) => (
          <div key={theater.name} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{theater.name}</h2>
            <p className="text-gray-600 mb-4">Location: {theater.location}</p>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Features:</h3>
              <ul className="space-y-1">
                {theater.features.map((feature) => (
                  <li key={feature} className="text-gray-600">• {feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Show Times:</h3>
              <div className="space-y-2">
                {theater.showTimes.map((show) => (
                  <div key={show.time} className="flex justify-between items-center">
                    <span className="text-gray-600">{show.time}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                      {show.availableSeats} seats available
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
