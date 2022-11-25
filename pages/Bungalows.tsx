import * as React from 'react';
import Navbar from '../components/Navbar';
import LayoutBungalows from '../components/LayoutBungalows';
import Chambre from '../components/Chambre';

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
