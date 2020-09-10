import axios from 'axios';
import { ERRORS } from '../constants/constants';

export async function getUsersCoordinates() {
    const locationData = await axios.get('https://ipinfo.io/json?token=931b78bb2d8d90');
    const coordinates = locationData.data.loc;
    return coordinates;
}

export async function getGeocodingInfo(query, language) {
    const geocodingURL = `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=7b09b9a9fd0842e6ad9e13896d7a8f4c&pretty=1&language=${language}`;
    const geocodingData = await axios.get(geocodingURL);
    const geocodingInfo = geocodingData.data.results[0]
    if (!geocodingInfo) throw new Error(ERRORS.NO_RESULTS)
    return geocodingInfo;
}

export async function getWeatherInfo(geometry, language, degrees) {
    const lat = geometry.lat;
    const lon = geometry.lng
    const weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&days=4&units=${degrees}&lang=${language}&key=b79f52f38c114829838840b5cbe85565`;
    const weatherData = await axios.get(weatherUrl);
    const geocodingInfo = weatherData.data.data;
    return geocodingInfo;
}