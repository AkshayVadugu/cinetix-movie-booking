import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserLogin from './pages/UserLogin';
import EmployeeLogin from './pages/EmployeeLogin';
import MoviePage from './pages/MoviePage';
import SeatSelection from './pages/SeatSelection';
import Payment from './pages/Payment';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/employee-login" element={<EmployeeLogin />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/select-seats" element={<SeatSelection />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;