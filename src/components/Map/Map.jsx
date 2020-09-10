import React from 'react';
import MapContainer from './MapContainer/MapContainer';
import Coordinates from './Coordinates/Coordinates';
import './Map.scss';
const Map = (props) => {
    return (
        < div className={`${props.className} map`}>
            {props.isInitialized
                ? <>
                    <MapContainer
                        className='map__map-container'
                        geometry={props.geometry}
                    />
                    <Coordinates
                        className='map__coordinates'
                        lat={props.lat}
                        lng={props.lng}
                    />
                </>

                : null}
        </div >
    )
}
export default Map;