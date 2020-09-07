import * as types from '../constants/actionTypes';

export function requestData() {
    return {
        type: types.REQUEST_DATA
    }
}

export function setGeocodingInfo(geocodingInfo) {
    const geocoding = geocodingInfo.components;
    const coordinates = geocodingInfo.annotations.DMS;
    const geometry = geocodingInfo.geometry;
    return {
        type: types.SET_GEOCODING_INFO,
        payload: {
            city: geocoding.city,
            country: geocoding.country,
            place: `${geocoding.city}, ${geocoding.country}`,
            lat: formatCoordinates(coordinates.lat),
            lng: formatCoordinates(coordinates.lng),
            geometry,
        }
    }
}

function formatCoordinates(coordinates) {
    const regExp = /\d+°\s\d+'/;
    const minsAndDegs = coordinates.match(regExp)[0];
    const latitude = coordinates.slice(-1);
    return `${minsAndDegs} ${latitude}`
}