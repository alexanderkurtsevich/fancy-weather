export const LANGUAGES = {
    EN: 'en',
    RU: 'ru',
}

export const DEGREES = {
    C: 'C',
    F: 'F',
}

export const TEXT = {
    [LANGUAGES.EN]: {
        SEARCH: 'SEARCH',
        PLACEHOLDER: 'Search city or ZIP',
        APPARENT: 'FEELS LIKE:',
        WIND: 'WIND:',
        WIND_UNITS: {
            C: 'M/S',
            F: 'MPH',
        },
        HUMIDITY: 'HUMIDITY:',
        EN: 'EN',
        RU: 'RU',
    },
    [LANGUAGES.RU]: {
        SEARCH: 'ПОИСК',
        PLACEHOLDER: 'Введите город или ZIP',
        APPARENT: 'ОЩУЩАЕТСЯ:',
        WIND: 'ВЕТЕР:',
        WIND_UNITS: {
            C: 'М/С',
            F: 'МИЛЬ/Ч',
        },
        HUMIDITY: 'ВЛАЖНОСТЬ:',
        EN: 'АНГ',
        RU: 'РУС',
    }
}

export const TIME_OPTIONS = {
    weekday: 'short',
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
}

export const MIN_TO_MS = 60000;
export const SEC_TO_MS = 1000;
export const COMMA_REG_EXP = /,/g;