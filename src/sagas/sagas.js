import axios from 'axios';
import * as types from '../constants/actionTypes';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import { setGeocodingInfo } from '../actions/locationActions';
import { setWeatherInfo } from '../actions/weatherActions';
import { getGeometry, getDegrees, getLanguage, getSearchQuery } from '../selectors/selectors';

export default function* sagaWatcher() {
    yield takeEvery(types.REQUEST_DATA, dataRequest)
    yield takeEvery(types.SELECT_DEGREES, changeDegreesRequest)
    yield takeEvery(types.SELECT_LANGUAGE, dataRequest)
    yield takeEvery(types.SEARCH_REQUEST, dataRequest)
}

function* dataRequest() {
    const language = yield select(getLanguage);
    const degrees = yield select(getDegrees);
    const searchQuery = yield select(getSearchQuery);

    const query = yield (searchQuery || call(getUsersCoordinates));

    const geocodingInfo = yield call(() => getGeocodingInfo(query, language));
    yield put(setGeocodingInfo(geocodingInfo));

    const geometry = yield select(getGeometry);
    const weatherInfo = yield call(() => getWeatherInfo(geometry, language, degrees));
    yield put(setWeatherInfo(weatherInfo));
}

function* changeDegreesRequest() {
    const geometry = yield select(getGeometry);
    const language = yield select(getLanguage);
    const degrees = yield select(getDegrees);

    const weatherInfo = yield call(() => getWeatherInfo(geometry, language, degrees))
    yield put(setWeatherInfo(weatherInfo));
}

async function getUsersCoordinates() {
    const locationData = await axios.get('https://ipinfo.io/json?token=931b78bb2d8d90');
    const coordinates = locationData.data.loc;
    return coordinates;
}

async function getGeocodingInfo(query, language) {
    const geocodingURL = `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=7b09b9a9fd0842e6ad9e13896d7a8f4c&pretty=1&language=${language}`;
    const geocodingData = await axios.get(geocodingURL);
    const geocodingInfo = geocodingData.data.results[0]
    console.log(geocodingData)
    return geocodingInfo;
}

async function getWeatherInfo(geometry, language, degrees) {
    const lat = geometry.lat;
    const lon = geometry.lng
    const weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&days=4&units=${degrees}&lang=${language}&key=b79f52f38c114829838840b5cbe85565`;
    const weatherData = await axios.get(weatherUrl);
    const geocodingInfo = weatherData.data.data;
    return geocodingInfo;
}