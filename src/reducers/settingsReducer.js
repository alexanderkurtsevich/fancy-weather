import { LANGUAGES, DEGREES, ERRORS } from '../constants/constants';
import * as types from '../constants/actionTypes';

const initialState = {
    language: localStorage.language || LANGUAGES.EN,
    degrees: localStorage.degrees || DEGREES.C,
    isSelectOpened: false,
    isLoading: true,
    isInitialized: false,
    notification: null,
    searchQuery: null,
    cache: {},
    backgroundUrl: null,
    isBgLoading: false,
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
                language: action.language,
            }
        case types.SELECT_DEGREES:
            if (state.degrees === action.degrees) return state
            return {
                ...state,
                degrees: action.degrees
            }
        case types.CHANGE_BACKGROUND:
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
                notification: null,
            }
        case types.FINISH_LOADING:
            return {
                ...state,
                isLoading: false,
            }
        case types.EMPTY_QUERY:
            return {
                ...state,
                notification: ERRORS.EMPTY,
            }
        case types.REQUEST_FAILED:
            return {
                ...state,
                notification: ERRORS.FAILED,
            }
        case types.NO_RESULTS:
            return {
                ...state,
                notification: ERRORS.NO_RESULTS,
            }
        case types.SET_INITIALIZED:
            return {
                ...state,
                isInitialized: true,
            }
        case types.CLEAR_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: null,
            }
        case types.CACHE_DATA:
            return {
                ...state,
                cache: {
                    ...state.cache,
                    ...action.payload
                },
            }
        case types.CLEAR_CACHE:
            return {
                ...state,
                cache: {}
            }
        case types.SET_BACKGROUND:
            return {
                ...state,
                backgroundUrl: action.payload
            }
        case types.START_BG_LOADING:
            return {
                ...state,
                isBgLoading: true,
            }
        case types.FINISH_BG_LOADING:
            return {
                ...state,
                isBgLoading: false,
            }
        default: return state;
    }
}