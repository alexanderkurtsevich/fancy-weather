import axios from 'axios';
import { ERRORS, TOKENS } from '../constants/constants';

export async function getUsersCoordinates() {
    const locationData = await axios.get(`https://ipinfo.io/json?token=${TOKENS.IPINFO}`);
    const coordinates = locationData.data.loc;
    return coordinates;
}

export async function getGeocodingInfo(query, language) {
    const geocodingURL = `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${TOKENS.OPENCAGE}&pretty=1&language=${language}`;
    const geocodingData = await axios.get(geocodingURL);
    const geocodingInfo = geocodingData.data.results[0]
    if (!geocodingInfo) throw new Error(ERRORS.NO_RESULTS)
    return geocodingInfo;
}

export async function getWeatherInfo(geometry, language, degrees) {
    const lat = geometry.lat;
    const lon = geometry.lng
    const weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&days=4&units=${degrees}&lang=${language}&key=${TOKENS.WEATHERBIT}`;
    const weatherData = await axios.get(weatherUrl);
    const geocodingInfo = weatherData.data.data;
    return geocodingInfo;
}

export async function getBackgroundImage() {
    const backgroundUrl = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=night,summer&client_id=${TOKENS.UNSPLASH}`;
    const backgroundImageData = await axios.get(backgroundUrl)
    const backgroundImage = backgroundImageData.data.urls.full;
    return backgroundImage;
}