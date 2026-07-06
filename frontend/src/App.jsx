import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from "./views/Home";
import AirportTransfer from "./views/Airport";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/airport-transfer" element={<AirportTransfer />} />
    </Routes>
  );
}