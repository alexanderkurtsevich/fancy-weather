import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';
import locationReducer from './locationReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
    settings: settingsReducer,
    location: locationReducer,
    weather: weatherReducer,
})