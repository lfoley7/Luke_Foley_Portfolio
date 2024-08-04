import { React } from "react";
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import './App.css';

export default function App() {
  
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/register" ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};