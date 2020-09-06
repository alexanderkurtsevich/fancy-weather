import React, { useState } from 'react';
import './Search.scss';

const Search = (props) => {
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
                placeholder='Search city or ZIP'
                onChange={onInputChange}
                value={inputValue}
            />
            <button className='search__button'>SEARCH</button>
        </div>
    )
}
export default Search;