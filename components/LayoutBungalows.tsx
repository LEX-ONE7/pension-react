import * as React from 'react';
import Navbar from '../components/Navbar';
import { getDataFromFirebase } from '../database/getDataFromFirebase';
import Slider from './Slider';

const LayoutBungalows = () => (
  <div className="container-fluid text-center ">
    <div className="row">
      <div className="col-8 p-0">
        <Slider />
      </div>
      <div className="col-4 d-flex align-items-center column justify-content-center bg-info">
        <h3>Découvrez notre nouveau bungalow</h3>
        <p>Je suis un texte sans importance</p>
      </div>
    </div>
  </div>
);
export default LayoutBungalows;
