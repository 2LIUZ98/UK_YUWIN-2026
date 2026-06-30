import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./views/Home";

// Main application component defining routing structure
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
