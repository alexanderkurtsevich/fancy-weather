import React, { useState } from 'react';
import './Search.scss';
import { useTranslation } from "react-i18next";

const Search = (props) => {
    const { t } = useTranslation()
    const [inputValue, setInputValue] = useState('');
    const onInputChange = function (event) {
        const value = event.target.value;
        setInputValue(value);
    }
    return (
        <div className={`${props.className} search`}>
            <input
                className='search__input'
                type='text'
                placeholder={t('placeholder')}
                onChange={onInputChange}
                value={inputValue}
            />
            <button
                className='search__button'
                onClick={() => props.searchRequest(inputValue)}
            >
                {t('search')}
            </button>
        </div>
    )
}
export default Search;