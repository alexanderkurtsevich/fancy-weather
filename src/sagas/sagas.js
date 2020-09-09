import * as types from '../constants/actionTypes';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import { setGeocodingInfo } from '../actions/locationActions';
import { setWeatherInfo } from '../actions/weatherActions';
import { getGeometry, getDegrees, getLanguage, getSearchQuery } from '../selectors/selectors';
import { getUsersCoordinates, getGeocodingInfo, getWeatherInfo } from './apiRequests';

export default function* sagaWatcher() {
    yield takeEvery(types.REQUEST_DATA, dataRequest)
    yield takeEvery(types.SELECT_DEGREES, changeDegreesRequest)
    yield takeEvery(types.SELECT_LANGUAGE, dataRequest)
    yield takeEvery(types.SEARCH_REQUEST, dataRequest)
}

function* dataRequest() {
    try {
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
    catch (e) {
        console.log(e.message)
    }
}

function* changeDegreesRequest() {
    const geometry = yield select(getGeometry);
    const language = yield select(getLanguage);
    const degrees = yield select(getDegrees);

    const weatherInfo = yield call(() => getWeatherInfo(geometry, language, degrees))
    yield put(setWeatherInfo(weatherInfo));
}

