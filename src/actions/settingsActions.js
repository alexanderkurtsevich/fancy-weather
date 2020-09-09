import * as types from '../constants/actionTypes';
import i18n from 'i18next';

export function openCloseSelect() {
    return {
        type: types.OPEN_CLOSE_SELECT,
    }
}

export function selectLanguage(language) {
    localStorage.language = language;
    i18n.changeLanguage(language);
    return {
        type: types.SELECT_LANGUAGE,
        language
    }
}

export function selectDegrees(degrees) {
    localStorage.degrees = degrees;
    return {
        type: types.SELECT_DEGREES,
        degrees
    }
}

export function changeBG() {
    return {
        type: types.CHANGE_BG,
    }
}

export function searchRequest(searchQuery) {
    return {
        type: types.SEARCH_REQUEST,
        payload: searchQuery,
    }
}