import * as types from '../constants/actionTypes';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import { setGeocodingInfo } from '../actions/locationActions';
import { setWeatherInfo } from '../actions/weatherActions';
import { getGeometry, getDegrees, getLanguage, getSearchQuery } from '../selectors/selectors';
import { getUsersCoordinates, getGeocodingInfo, getWeatherInfo } from './apiRequests';
import { startLoading, finishLoading, requestFailed, noResults, setInitialized, clearSearchQuery } from '../actions/settingsActions';
import { ERRORS } from '../constants/constants';

export default function* sagaWatcher() {
    yield takeEvery(types.INITIAL_REQUEST, initialRequest)
    yield takeEvery(types.SELECT_DEGREES, changeDegreesRequest)
    yield takeEvery(types.SELECT_LANGUAGE, dataRequest)
    yield takeEvery(types.SEARCH_REQUEST, dataRequest)
}


function* sagaGeocoding() {
    try {
        const language = yield select(getLanguage);
        const searchQuery = yield select(getSearchQuery);
        const query = yield (searchQuery || call(getUsersCoordinates));

        const geocodingInfo = yield call(() => getGeocodingInfo(query, language));
        yield put(setGeocodingInfo(geocodingInfo));
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

function* sagaWeather() {
    try {
        const geometry = yield select(getGeometry);
        const language = yield select(getLanguage);
        const degrees = yield select(getDegrees);

        const weatherInfo = yield call(() => getWeatherInfo(geometry, language, degrees))
        yield put(setWeatherInfo(weatherInfo));
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
        
        yield call(sagaGeocoding)
        yield call(sagaWeather)

        yield put(finishLoading())
}

function* changeDegreesRequest() {
        yield put(startLoading())

        yield call(sagaWeather)

        yield put(finishLoading())
}