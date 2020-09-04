import * as types from '../constants/actionTypes';

export function openCloseSelect() {
    return {
        type: types.OPEN_CLOSE_SELECT,
    }
}

export function selectLanguage(language) {
    return {
        type: types.SELECT_LANGUAGE,
        language
    }
}

export function selectDegrees(degrees) {
    return {
        type: types.SELECT_DEGREES,
        degrees
    }
}