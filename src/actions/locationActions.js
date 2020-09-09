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
    const offset = geocodingInfo.annotations.timezone.offset_sec;
    const city = geocoding.city || geocoding.state;
    return {
        type: types.SET_GEOCODING_INFO,
        payload: {
            city,
            country: geocoding.country,
            place: `${city}, ${geocoding.country}`,
            lat: formatCoordinates(coordinates.lat),
            lng: formatCoordinates(coordinates.lng),
            geometry,
            offset,
        }
    }
}

function formatCoordinates(coordinates) {
    const regExp = /\d+°\s\d+'/;
    const minsAndDegs = coordinates.match(regExp)[0];
    const latitude = coordinates.slice(-1);
    return `${minsAndDegs} ${latitude}`
}