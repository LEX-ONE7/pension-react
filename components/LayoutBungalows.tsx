import * as React from 'react';
import Navbar from '../components/Navbar';
import { getDataFromFirebase } from '../database/getDataFromFirebase';

const [data, setData] = React.useState([]);
React.useEffect(() => {
  (async () => {
    const response = await getDataFromFirebase('layout-bungalows');

    console.log(response);
    setData(response);
  })();
}, []);

const LayoutBungalows = () => (
  <div className="container text-center">
    <div className="row">
      <div className="col">col</div>
      <div className="col">col</div>
      <div className="col">col</div>
      <div className="col">col</div>
    </div>
    <div className="row">
      <div className="col-8">col-8</div>
      <div className="col-4">col-4</div>
    </div>
  </div>
);
export default LayoutBungalows;
