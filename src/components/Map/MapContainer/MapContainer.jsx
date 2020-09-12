import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { TOKENS } from '../../../constants/constants';
import './MapContainer.scss';

const MapContainer = (props) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);
    const { lng, lat } = props.geometry;

    useEffect(() => {
        mapboxgl.accessToken = TOKENS.MAPBOX;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: 8
        });
        marker.current = new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .addTo(map.current);
    }, [lng, lat])

    return (
        <div ref={mapContainer} className={`${props.className} map-container`}>

        </div>
    )
}
export default MapContainer;