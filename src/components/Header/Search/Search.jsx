import React, { useState } from 'react';
import './Search.scss';
import { useTranslation } from 'react-i18next';
import { ENTER_KEY } from '../../../constants/constants';

const Search = (props) => {
    const { t } = useTranslation();
    const [inputValue, setInputValue] = useState('');
    const onInputChange = function (event) {
        const value = event.target.value;
        setInputValue(value);
    };
    const enterKeyHandle = function (event) {
        if (event.key === ENTER_KEY) {
            props.searchRequest(inputValue);
        }
    };
    return (
        <div className={`${props.className} search`}>
            <input
                className="search__input"
                type="text"
                placeholder={t('placeholder')}
                onChange={onInputChange}
                value={inputValue}
                onKeyPress={enterKeyHandle}
            />
            <button
                className="search__button"
                onClick={() => props.searchRequest(inputValue)}
            >
                {t('search')}
            </button>
        </div>
    );
};
export default Search;
