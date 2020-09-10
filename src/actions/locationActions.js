import * as types from '../constants/actionTypes';

export function initialRequest() {
    return {
        type: types.INITIAL_REQUEST
    }
}

export function setGeocodingInfo(geocodingInfo) {
    const geocoding = geocodingInfo.components;
    const coordinates = geocodingInfo.annotations.DMS;
    const city = geocoding.city || geocoding.town || geocoding.state;
    return {
        type: types.SET_GEOCODING_INFO,
        payload: {
            city,
            country: geocoding.country,
            place: `${city}, ${geocoding.country}`,
            lat: formatCoordinates(coordinates.lat),
            lng: formatCoordinates(coordinates.lng),
            geometry: geocodingInfo.geometry,
            offset: geocodingInfo.annotations.timezone.offset_sec,
        }
    }
}

function formatCoordinates(coordinates) {
    const regExp = /\d+°\s\d+'/;
    const minsAndDegs = coordinates.match(regExp)[0];
    const latitude = coordinates.slice(-1);
    return `${minsAndDegs} ${latitude}`
}