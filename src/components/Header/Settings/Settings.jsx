import React from 'react';
import './Settings.scss';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import DegreesToggle from './DegreesToggle/DegreesToggle';

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
            <DegreesToggle
                className='settings__degrees-toggle'
                degrees={props.degrees}
                selectDegrees={props.selectDegrees}
            />
        </div>
    )
}

export default Settings;