import React from 'react';
import './LanguageSelect.scss';
import { LANGUAGES } from '../../../../constants/constants';
import { useTranslation } from "react-i18next";

const LanguageSelect = (props) => {
    const language = props.language;
    const { t } = useTranslation()
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
                <p className='language-select__language'>{t(`${language}`)}</p>
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
                        {t('en')}
                    </div>
                    <div
                        className='language-select__select-item'
                        onClick={() => props.selectLanguage(LANGUAGES.RU)}
                    >
                        {t('ru')}
                    </div>
                </div>
                : null}
        </div>
    )
}

export default LanguageSelect;