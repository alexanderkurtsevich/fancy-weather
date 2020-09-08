import React from 'react';
import Header from './containers/headerContainer';
import Weather from './containers/weatherContainer';
import './style/app.scss';

function App() {
  return (
    <div className='fancy-weather'>
      <Header className='fancy-weather__header'/>
      <Weather className='fancy-weather__weather'/>
    </div>
  );
}

export default App;
