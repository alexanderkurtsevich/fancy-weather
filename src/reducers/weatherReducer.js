import * as types from '../constants/actionTypes';

const initialState = {
    main: {},
    other: [],
}

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_WEATHER_INFO:
            return {
                ...state, 
                ...action.payload,
            }
        default:
            return state;
    }
}