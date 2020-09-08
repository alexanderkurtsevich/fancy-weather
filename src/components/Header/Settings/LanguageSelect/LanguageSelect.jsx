import React from 'react';
import './LanguageSelect.scss';
import { LANGUAGES, TEXT } from '../../../../constants/constants';

const LanguageSelect = (props) => {
    const language = props.language;
    const {EN, RU} = TEXT[language];
    const CURRENT_LANG = TEXT[language][language.toUpperCase()]
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
                <p className='language-select__language'>{CURRENT_LANG}</p>
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
                        {EN}
                    </div>
                    <div
                        className='language-select__select-item'
                        onClick={() => props.selectLanguage(LANGUAGES.RU)}
                    >
                        {RU}
                    </div>
                </div>
                : null}
        </div>
    )
}

export default LanguageSelect;