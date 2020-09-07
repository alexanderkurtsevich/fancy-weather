import axios from 'axios';
import * as types from '../constants/actionTypes';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import { setGeocodingInfo } from '../actions/locationActions';
import { setWeatherInfo } from '../actions/weatherActions';

export default function* sagaWatcher() {
    yield takeEvery(types.REQUEST_DATA, sagaWorker)
}

function* sagaWorker() {
    const usersCoordinates = yield call(getUsersCoordinates);
    const geocodingInfo = yield call(() => getGeocodingInfo(usersCoordinates));
    yield put(setGeocodingInfo(geocodingInfo));
    const place = yield select((state) => state.location.place);
    const degrees = yield select((state) => state.settings.degrees);
    const weatherInfo = yield call(() => getWeatherInfo(place, degrees));
    yield put(setWeatherInfo(weatherInfo));
    yield console.log(geocodingInfo, weatherInfo)
}

async function getUsersCoordinates() {
    const locationData = await axios.get('https://ipinfo.io/json?token=931b78bb2d8d90');
    const coordinates = locationData.data.loc;
    return coordinates;
}

async function getGeocodingInfo(query) {
    const geocodingURL = `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=7b09b9a9fd0842e6ad9e13896d7a8f4c&pretty=1&language=en`;
    const geocodingData = await axios.get(geocodingURL);
    const geocodingInfo = geocodingData.data.results[0]
    return geocodingInfo;
}

async function getWeatherInfo(place, degrees) {
    const weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${place}&days=4&units=${degrees}&lang=en&key=b79f52f38c114829838840b5cbe85565`;
    const weatherData = await axios.get(weatherUrl);
    const geocodingInfo = weatherData.data.data;
    return geocodingInfo;
}