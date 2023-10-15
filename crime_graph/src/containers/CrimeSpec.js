import React from 'react';
import { Link , useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Chart from '../presentational/Chart.js';
import Button from '../presentational/Button.js'
import '../css/styles.css';

export default function CrimeSpec() {

  const records = useLocation().state.object;
  const locations = useSelector(state => state.csvData.locations);
  const crime_class = records['범죄분류'];

  const x_data = []
  for (const location of locations) 
    x_data.push(records[location])
  
  return (
    <div className='chartPage'>
      <div>
        <Link to="/korea_crime_graph">
          <Button text="Home"/>
        </Link>
      </div>
      <div className='CrimeClass'>
        <h3>{crime_class}</h3>
      </div>
      <div className='chartContainer'>
        <Chart y_data={locations} x_data={x_data}/>
      </div>
    </div>
  );
}
