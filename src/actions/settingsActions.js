import * as types from '../constants/actionTypes';
import { WEATHER_DATA, GEOCODING_DATA } from '../constants/constants';
import i18n from 'i18next';

export function openCloseSelect() {
    return {
        type: types.OPEN_CLOSE_SELECT,
    };
}

export function selectLanguage(language) {
    localStorage.language = language;
    i18n.changeLanguage(language);
    return {
        type: types.SELECT_LANGUAGE,
        language,
    };
}

export function selectDegrees(degrees) {
    localStorage.degrees = degrees;
    return {
        type: types.SELECT_DEGREES,
        degrees,
    };
}

export function changeBackground() {
    return {
        type: types.CHANGE_BACKGROUND,
    };
}

export function setBackground(url) {
    return {
        type: types.SET_BACKGROUND,
        payload: url,
    };
}

export function searchRequest(searchQuery) {
    const isEmpty = searchQuery.trim().length === 0;
    if (isEmpty) return { type: types.EMPTY_QUERY };

    return {
        type: types.SEARCH_REQUEST,
        payload: searchQuery,
    };
}

export function startLoading() {
    return {
        type: types.START_LOADING,
    };
}

export function finishLoading() {
    return {
        type: types.FINISH_LOADING,
    };
}

export function requestFailed() {
    return {
        type: types.REQUEST_FAILED,
    };
}

export function noResults() {
    return {
        type: types.NO_RESULTS,
    };
}

export function clearSearchQuery() {
    return {
        type: types.CLEAR_SEARCH_QUERY,
    };
}

export function setInitialized() {
    return {
        type: types.SET_INITIALIZED,
    };
}

export function cacheData(data, language, degrees = '') {
    const isWeatherInfo = Array.isArray(data);
    const key = `${language}${degrees}${
        isWeatherInfo ? WEATHER_DATA : GEOCODING_DATA
    }`;
    return {
        type: types.CACHE_DATA,
        payload: {
            [key]: data,
        },
    };
}

export function clearCache() {
    return {
        type: types.CLEAR_CACHE,
    };
}

export function startBgLoading() {
    return {
        type: types.START_BG_LOADING,
    };
}

export function finishBgLoading() {
    return {
        type: types.FINISH_BG_LOADING,
    };
}
