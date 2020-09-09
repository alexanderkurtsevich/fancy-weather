import React from 'react';
import './MainDay.scss';
import { TEXT } from '../../../constants/constants';
import iconCodes from '../../../constants/iconCodes';

const MainDay = (props) => {
    if (!props.mainDay.icon) {
        return null
    }
    const language = props.language;
    const degrees = props.degrees;
    const mainDay = props.mainDay;
    const iconSrc = iconCodes[mainDay.icon]

    const { APPARENT, WIND_UNITS, WIND, HUMIDITY } = TEXT[language];
    return (
        <div className={`${props.className} main-day`}>
            <p className='main-day__temp'>{`${mainDay.temp}`}</p>
            <div className='main-day__image'
                style={{ backgroundImage: `url(${require('../../../' + iconSrc)})` }}
            >
            </div>
            <div className='main-day__info'>
                <p className='main-day__description'>{mainDay.description}</p>
                <p className='main-day__apparent'>{`${APPARENT} ${mainDay.apparent}°`}</p>
                <p className='main-day__wind'>{`${WIND} ${mainDay.wind} ${WIND_UNITS[degrees]}`}</p>
                <p className='main-day__humidity'>{`${HUMIDITY} ${mainDay.humidity}%`}</p>
            </div>
        </div>
    )
}
export default MainDay;