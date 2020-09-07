import * as types from '../constants/actionTypes';

export function setWeatherInfo(weatherInfo) {
    const mainDay = weatherInfo[0];
    const otherDays = weatherInfo.slice(1);
    return {
        type: types.SET_WEATHER_INFO,
        payload: {
            main: {
                temp: Math.round(mainDay.temp),
                description: mainDay.weather.description,
                apparent: Math.round((mainDay.app_max_temp + mainDay.app_min_temp) / 2),
                wind: mainDay.wind_spd.toFixed(1),
                humidity: mainDay.rh,
                icon: mainDay.weather.icon,
            },
            other: otherDays.map(day => {
                return {
                    temp: Math.round(day.temp),
                    icon: day.weather.icon,
                }
            })
        }
    }
}