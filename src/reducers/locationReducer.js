import * as types from '../constants/actionTypes';

const initialState = {
    place: null,
    lat: null,
    lng: null,
    geometry: {},
    offset: null,
    city: null,
    country: null,
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