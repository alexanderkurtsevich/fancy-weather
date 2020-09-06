import React from 'react';
import './Header.scss';
import Settings from './Settings/Settings';
import Search from './Search/Search';

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
                selectDegrees={props.selectDegrees}
                changeBG={props.changeBG}
            />
            <Search
                className='header__search'
            />
        </div>
    )
}

export default Header;