import { LANGUAGES, DEGREES } from '../constants/constants';

const initialState = {
    language: LANGUAGES.EN,
    degrees: DEGREES.C,
}

export default function settingsReducer(state = initialState, action) {
    switch (action.type) {
        default: return state;
    }
}