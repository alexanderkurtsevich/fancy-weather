import React from 'react';
import './LanguageSelect.scss';

const LanguageSelect = props => {
    return (
        <div className={`${props.className} language-select`}>
            <p className='language-select__language'>EN</p>
            <div className='language-select__arrow'></div>

        </div>
    )
}

export default LanguageSelect;