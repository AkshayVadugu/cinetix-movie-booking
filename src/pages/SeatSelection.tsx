import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SeatSelection = () => {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const seatsPerRow = 12;

  const handleSeatClick = (seatId: string) => {
    setSelectedSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
  };

  const handleProceedToPayment = () => {
    if (selectedSeats.length > 0) {
      navigate('/payment');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Select Your Seats</h1>
      
      <div className="mb-8">
        <div className="w-full bg-gray-300 h-8 rounded-t-lg flex items-center justify-center text-gray-700 font-semibold">
          SCREEN
        </div>
      </div>

      <div className="space-y-4">
        {rows.map(row => (
          <div key={row} className="flex justify-center space-x-2">
            <div className="w-6 flex items-center justify-center font-semibold">
              {row}
            </div>
            {Array.from({ length: seatsPerRow }, (_, i) => {
              const seatId = `${row}${i + 1}`;
              const isSelected = selectedSeats.includes(seatId);
              return (
                <button
                  key={seatId}
                  className={`w-8 h-8 rounded ${
                    isSelected
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  } flex items-center justify-center text-sm`}
                  onClick={() => handleSeatClick(seatId)}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex justify-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-200 rounded"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-indigo-600 rounded"></div>
            <span>Selected</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold">
            Selected Seats: {selectedSeats.join(', ')}
          </p>
          <p className="text-lg">
            Total Amount: ${selectedSeats.length * 12}
          </p>
        </div>

        <button
          onClick={handleProceedToPayment}
          disabled={selectedSeats.length === 0}
          className={`w-full py-3 rounded-lg ${
            selectedSeats.length > 0
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
              : 'bg-gray-300 cursor-not-allowed text-gray-500'
          }`}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default SeatSelection