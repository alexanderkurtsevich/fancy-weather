import React from 'react';
import './LanguageSelect.scss';
import { LANGUAGES } from '../../../../constants/constants';

const LanguageSelect = (props) => {
    const isOpen = props.isSelectOpened;
    const selectedLangClassName = isOpen
        ? 'language-select__selected-language language-select__selected-language_open'
        : 'language-select__selected-language';

    return (
        <div
            className={`${props.className} language-select`}
            onClick={props.openCloseSelect}
        >
            <div
                className={selectedLangClassName}
            >
                <p className='language-select__language'>{props.language}</p>
                <div className='language-select__arrow'></div>
            </div>
            {isOpen
                ? <div
                    className='language-select__drop-menu'
                    onMouseLeave={props.openCloseSelect}
                >
                    <div
                        className='language-select__select-item'
                        onClick={() => props.selectLanguage(LANGUAGES.EN)}
                    >
                        {LANGUAGES.EN}
                    </div>
                    <div
                        className='language-select__select-item'
                        onClick={() => props.selectLanguage(LANGUAGES.RU)}
                    >
                        {LANGUAGES.RU}
                    </div>
                </div>
                : null}
        </div>
    )
}

export default LanguageSelect;