import React from 'react';
import './Weather.scss';
import Location from './Location/Location';
import MainDay from './MainDay/MainDay';
import OtherDays from './OtherDays/OtherDays';

const Weather = (props) => {

    return (
        <div className={`${props.className} weather`}>
            <Location
                className='weather__location'
                place={props.place}
                offset={props.offset}
                language={props.language}
            />
            <MainDay
                mainDay={props.mainDay}
                language={props.language}
                degrees={props.degrees}
                className='weather__main-day'
            />
            <OtherDays
                otherDays={props.otherDays}
                language={props.language}
                className='weather__other-days'
            />
        </div>
    )
}
export default Weather;