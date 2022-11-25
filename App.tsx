import * as React from 'react';
import './style.css';
import Slider from './components/Slider';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <Slider />

      <h1>Pension Lagoon !</h1>
      <p>Well come :)</p>
    </div>
  );
}
