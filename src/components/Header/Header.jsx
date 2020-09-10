import React, { useEffect } from 'react';
import './Header.scss';
import Settings from './Settings/Settings';
import Search from './Search/Search';
import { useTranslation } from "react-i18next";

const Header = (props) => {
    const { t } = useTranslation();
    const { initialRequest } = props;
    useEffect(() => {
        initialRequest()
        console.log('wupupidu')
    }, [initialRequest])
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
                searchRequest={props.searchRequest}
            />
            {props.notification
                ? <p className='header__notifications'>{t(props.notification)}</p>
                : null}

        </div>
    )
}

export default Header;