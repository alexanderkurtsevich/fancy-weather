import React from 'react';
import './Settings.scss';
import LanguageSelect from './LanguageSelect/LanguageSelect'

const Settings = (props) => {
    return (
        <div className={`${props.className} settings`}>
            <LanguageSelect
                className='settings__language-select'
                language={props.language}
                isSelectOpened={props.isSelectOpened}
                openCloseSelect={props.openCloseSelect}
                selectLanguage={props.selectLanguage}
            />
        </div>
    )
}

export default Settings;