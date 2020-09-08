import React, { useState } from 'react';
import './Search.scss';
import { TEXT } from '../../../constants/constants';

const Search = (props) => {
    const language = props.language;
    const { SEARCH, PLACEHOLDER } = TEXT[language]
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
                placeholder={PLACEHOLDER}
                onChange={onInputChange}
                value={inputValue}
            />
            <button className='search__button'>{SEARCH}</button>
        </div>
    )
}
export default Search;