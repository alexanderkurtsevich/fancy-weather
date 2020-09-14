import axios from 'axios';
import { ERRORS, TOKENS, MIN_TO_MS, SEC_TO_MS } from '../constants/constants';

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

export async function getBackgroundImage(offset) {
    const timeOfYear = getTimeOfYear(offset);
    const partOfDay = getPartOfDay(offset);
    const backgroundUrl = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${timeOfYear},${partOfDay}&client_id=${TOKENS.UNSPLASH}`;
    const backgroundImageData = await axios.get(backgroundUrl)
    const backgroundImage = backgroundImageData.data.urls.full;
    return backgroundImage;
}

function getLocationTime(offset) {
    const date = new Date();
    const localTime = date.getTime();
    const localOffset = date.getTimezoneOffset() * MIN_TO_MS;
    const locationOffset = offset * SEC_TO_MS;
    const locationTime = localTime + localOffset + locationOffset;
    return new Date(locationTime);
}

function getTimeOfYear(offset) {
    const time = getLocationTime(offset);
    const month = time.getMonth() + 1;

    switch (month) {
        case 12 || 1 || 2:
            return 'winter'
        case 3 || 4 || 5:
            return 'spring'
        case 5 || 7 || 8:
            return 'summer'
        default:
            return 'autumn'
    }
}

function getPartOfDay(offset) {
    const time = getLocationTime(offset);
    const hour = time.getHours()

    if (hour >= 0 && hour <= 5) {
        return 'nigth';
    }
    if (hour >= 6 && hour <= 11) {
        return 'morning';
    }
    if (hour >= 12 && hour <= 17) {
        return 'day';
    }

    return 'evening';
}