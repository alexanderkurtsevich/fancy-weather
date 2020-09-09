import React from 'react';
import './MainDay.scss';
import iconCodes from '../../../constants/iconCodes';
import { useTranslation } from "react-i18next";

const MainDay = (props) => {
    const { t } = useTranslation();
    if (!props.mainDay.icon) {
        return null
    }
    const degrees = props.degrees;
    const mainDay = props.mainDay;
    const iconSrc = iconCodes[mainDay.icon]
    return (
        <div className={`${props.className} main-day`}>
            <p className='main-day__temp'>{`${mainDay.temp}`}</p>
            <div className='main-day__image'
                style={{ backgroundImage: `url(${require('../../../' + iconSrc)})` }}
            >
            </div>
            <div className='main-day__info'>
                <p className='main-day__description'>{mainDay.description}</p>
                <p className='main-day__apparent'>{`${t('apparent')} ${mainDay.apparent}°`}</p>
                <p className='main-day__wind'>{`${t('wind')} ${mainDay.wind} ${t(`wind_units.${degrees}`)}`}</p>
                <p className='main-day__humidity'>{`${t('humidity')} ${mainDay.humidity}%`}</p>
            </div>
        </div>
    )
}
export default MainDay;