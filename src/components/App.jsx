import React, { useEffect, useState } from 'react';
import Header from '../containers/headerContainer';
import Weather from '../containers/weatherContainer';
import Map from '../containers/mapContainer'
import './App.scss';

const App = props => {
  const [appStyle, setAppStyle] = useState(null);
  const backgroundUrl = props.backgroundUrl;
  
  useEffect(() => {
    if (backgroundUrl) {
      const background = new Image();
      background.onload = () => {
        setAppStyle({ backgroundImage: `url('${backgroundUrl}')` })
      };
      background.src = backgroundUrl;
    }
  }, [backgroundUrl])


  const { initialRequest } = props;
  useEffect(() => {
    initialRequest()
  }, [initialRequest])
  return (
    <div style={appStyle} className='fancy-weather'>
      <Header className='fancy-weather__header' />
      <Weather className='fancy-weather__weather' />
      <Map className='fancy-weather__map' />
    </div>
  );
}

export default App;
