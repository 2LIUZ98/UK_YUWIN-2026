import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from "./views/Home";
import AirportTransfer from "./views/Airport";
import About from "./views/About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/airport-transfer" element={<AirportTransfer />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}