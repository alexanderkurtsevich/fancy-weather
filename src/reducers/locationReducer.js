import * as types from '../constants/actionTypes';

const initialState = {
    city: 'Minsk',
    country: 'Belarus',
}

export default function locationRecuder(state = initialState, action) {
    switch (action.type) {
        case types.SET_GEOCODING_INFO:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}