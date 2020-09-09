import i18n from 'i18next';
import { LANGUAGES } from '../constants/constants';

i18n.init({
    lng: localStorage.language || LANGUAGES.RU,
    resources: {
        [LANGUAGES.EN]: {
            translation: {
                search: 'search',
                placeholder: 'Search city or ZIP',
                en: 'en',
                ru: 'ru',
                apparent: 'feels like:',
                wind: 'wind:',
                wind_units: {
                    C: 'm/s',
                    F: 'mph',
                },
                humidity: 'humidity:',
            }
        },
        [LANGUAGES.RU]: {
            translation: {
                search: 'поиск',
                placeholder: 'Введите город или ZIP',
                en: 'анг',
                ru: 'рус',
                apparent: 'ощущается:',
                wind: 'ветер:',
                wind_units: {
                    C: 'м/с',
                    F: 'миль/ч',
                },
                humidity: 'влажность:',
            }
        }
    },
    ns: ["translation"],
    defaultNS: "translation",
    keySeparator: '.',
})

export default i18n;