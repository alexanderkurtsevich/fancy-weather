import i18n from 'i18next';
import { LANGUAGES } from '../constants/constants';

i18n.init({
    lng: localStorage.language || LANGUAGES.EN,
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
                empty: 'This field cannot be empty',
                no_results: 'No results were found for your search :(',
                failed: 'Oops! Something went wrong :(',
                latitude: 'Latitude:',
                longtitude: 'Longtitude:',
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
                empty: 'Данное поле не может быть пустым',
                no_results: 'По вашему запросу ничего не найдено :(',
                failed: 'Упс! что-то пошло не так :(',
                latitude: 'Широта:',
                longtitude: 'Долгота:',
            }
        }
    },
    ns: ["translation"],
    defaultNS: "translation",
    keySeparator: '.',
})

export default i18n;