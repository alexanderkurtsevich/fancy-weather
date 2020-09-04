import React from 'react';
import './LanguageSelect.scss';
import { LANGUAGES } from '../../../../constants/constants';

const LanguageSelect = (props) => {
    const isOpen = props.isSelectOpened;
    const selectedLangClassName = isOpen
        ? 'language-select__selected-language language-select__selected-language_open'
        : 'language-select__selected-language'
    const dropMenuClassName = isOpen
        ? 'language-select__drop-menu language-select__drop-menu_open'
        : 'language-select__drop-menu'

    return (
        <div
            className={`${props.className} language-select`}
            onClick={props.openCloseSelect}
        >
            <div className={selectedLangClassName}>
                <p className='language-select__language'>{props.language}</p>
                <div className='language-select__arrow'></div>
            </div>
            <div className={dropMenuClassName}>
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

        </div>
    )
}

export default LanguageSelect;