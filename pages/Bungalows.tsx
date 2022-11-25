import * as React from 'react';
import Navbar from '../components/Navbar';
import LayoutBungalows from '../components/LayoutBungalows';

const Bungalows = () => {
  return (
    <div>
      <Navbar />
      <LayoutBungalows />
      <Chambre />
    </div>
  );
};
export default Bungalows;
