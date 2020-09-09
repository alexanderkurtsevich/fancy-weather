import { LANGUAGES, DEGREES } from '../constants/constants';
import * as types from '../constants/actionTypes';

const initialState = {
    language: localStorage.language || LANGUAGES.EN,
    degrees: localStorage.degrees || DEGREES.C,
    isSelectOpened: false,
    isLoading: false,
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
        case types.SELECT_DEGREES:
            return {
                ...state,
                degrees: action.degrees
            }
        case types.CHANGE_BG:
            return {
                ...state,
            }
        case types.SEARCH_REQUEST:
            return {
                ...state, 
                searchQuery: action.payload,
            }
        case types.START_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case types.FINISH_LOADING:
            return {
                ...state,
                isLoading: false,
            }
        default: return state;
    }
}