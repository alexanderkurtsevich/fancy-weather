import * as types from '../constants/actionTypes';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import { setGeocodingInfo } from '../actions/locationActions';
import { setWeatherInfo } from '../actions/weatherActions';
import { ERRORS, WEATHER_DATA, GEOCODING_DATA } from '../constants/constants';
import {
    getGeometry,
    getDegrees,
    getLanguage,
    getSearchQuery,
    getCache
} from './selectors';
import {
    getUsersCoordinates,
    getGeocodingInfo,
    getWeatherInfo,
    getBackgroundImage,
} from './apiRequests';
import {
    startLoading,
    finishLoading,
    requestFailed,
    noResults,
    setInitialized,
    clearSearchQuery,
    cacheData,
    clearCache,
    setBackground,
} from '../actions/settingsActions';

function* geocodingWorker() {
    try {
        const language = yield select(getLanguage);
        const searchQuery = yield select(getSearchQuery);
        const cachedData = yield call(() => getCachedData(language));

        if (cachedData) {
            yield put(setGeocodingInfo(cachedData));
        }
        else {
            const query = yield (searchQuery || call(getUsersCoordinates));
            const geocodingInfo = yield call(() => getGeocodingInfo(query, language));
            yield put(setGeocodingInfo(geocodingInfo));
            yield put(cacheData(geocodingInfo, language))
        }
    }
    catch (e) {
        if (e.message === ERRORS.NO_RESULTS) {
            yield put(noResults());
            yield put(clearSearchQuery())
        }
        else {
            yield put(requestFailed())
        }
    }
}

function* weatherWorker() {
    try {
        const language = yield select(getLanguage);
        const degrees = yield select(getDegrees);
        const cachedData = yield call(() => getCachedData(language, degrees))

        if (cachedData) {
            yield put(setWeatherInfo(cachedData));
        }
        else {
            const geometry = yield select(getGeometry);
            const weatherInfo = yield call(() => getWeatherInfo(geometry, language, degrees))
            yield put(setWeatherInfo(weatherInfo));
            yield put(cacheData(weatherInfo, language, degrees))
        }
    }
    catch (e) {
        yield put(requestFailed())
    }
}

function* initialRequest() {
    yield call(dataRequest);
    yield put(setInitialized())
}

function* dataRequest() {
    yield put(startLoading())

    yield call(geocodingWorker)
    yield call(weatherWorker)

    yield put(finishLoading())
}

function* searchRequest() {
    yield put(clearCache())
    yield call(dataRequest)
}

function* changeDegreesRequest() {
    yield put(startLoading())

    yield call(weatherWorker)

    yield put(finishLoading())
}

function* getCachedData(language, degrees) {
    const cache = yield select(getCache);
    if (cache && !degrees) {
        const key = `${language}${GEOCODING_DATA}`
        return cache[key]
    }
    else if (cache) {
        const key = `${language}${degrees}${WEATHER_DATA}`;
        return cache[key]
    }
    return null;
}

function* backgroundWorker(){
    const backgroundImage = yield call(getBackgroundImage);
    yield put(setBackground(backgroundImage));
}

export default function* sagaWatcher() {
    yield takeEvery(types.INITIAL_REQUEST, initialRequest)
    yield takeEvery(types.SEARCH_REQUEST, searchRequest)
    yield takeEvery(types.SELECT_DEGREES, changeDegreesRequest)
    yield takeEvery(types.SELECT_LANGUAGE, dataRequest)
    yield takeEvery(types.CHANGE_BACKGROUND, backgroundWorker)
}