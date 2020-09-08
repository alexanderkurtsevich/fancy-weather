import React, { useEffect } from 'react';
import './Header.scss';
import Settings from './Settings/Settings';
import Search from './Search/Search';

const Header = (props) => {
    const { requestData } = props;
    useEffect(() => {
        requestData()
    }, [requestData])
    return (
        <div className={`${props.className} header`}>
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
                language={props.language}
            />
        </div>
    )
}

export default Header;