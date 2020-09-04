import React from 'react';
import './Header.scss';
import Settings from './Settings/Settings';

const Header = (props) => {
    return (
        <div className='header'>
            <Settings
                className='header__settings'
                language={props.language}
                degrees={props.degrees}
                isSelectOpened={props.isSelectOpened}
                openCloseSelect={props.openCloseSelect}
                selectLanguage={props.selectLanguage}
            />
        </div>
    )
}

export default Header;