import { LANGUAGES, DEGREES } from '../constants/constants';
import * as types from '../constants/actionTypes';

const initialState = {
    language: LANGUAGES.EN,
    degrees: DEGREES.C,
    isSelectOpened: false,
}

export default function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case types.OPEN_CLOSE_SELECT:
            return {
                ...state,
                isSelectOpened: !state.isSelectOpened
            }
        case types.SELECT_LANGUAGE:
            return {
                ...state,
                language: action.language
            }
        default: return state;
    }
}