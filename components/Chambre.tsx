import * as React from 'react';
import Navbar from '../components/Navbar';
import { getDataFromFirebase } from '../database/getDataFromFirebase';
import SliderChambre from './SliderChambre';

const Chambre = () => (
  <div className="container-fluid text-center ">
    <div className="row">
      <div className="col-12 col-md-8 p-0">
        <SliderChambre />
      </div>
      <div className="col-12 col-md-4 d-flex align-items-center column justify-content-center bg-info">
        <h3 className="col">Nos Chambres</h3>
        <p>Chambres Doubles</p>
      </div>
    </div>
  </div>
);
export default Chambre;
