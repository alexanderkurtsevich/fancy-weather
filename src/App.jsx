import React from 'react';
import Header from './containers/headerContainer';
import Weather from './containers/weatherContainer';
import Map from './containers/mapContainer'
import './style/app.scss';

function App() {
  return (
    <div className='fancy-weather'>
      <Header className='fancy-weather__header' />
      <Weather className='fancy-weather__weather' />
      <Map className='fancy-weather__map' />
    </div>
  );
}

export default App;
