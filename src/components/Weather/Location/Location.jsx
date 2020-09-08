import React from 'react';
import './Location.scss';
import { TIME_OPTIONS, MIN_TO_MS, SEC_TO_MS, COMMA_REG_EXP } from '../../../constants/constants';

const getDateTime = (offset, language) => {
    const date = new Date();
    const localTime = date.getTime();
    const localOffset = date.getTimezoneOffset() * MIN_TO_MS;
    const locationOffset = offset * SEC_TO_MS;
    const locationTime = localTime + localOffset + locationOffset;
    const locationDateTimeString = new Date(locationTime).toLocaleString(language, TIME_OPTIONS);
    const formattedDateTime = locationDateTimeString.replace(COMMA_REG_EXP, '');

    return formattedDateTime;
}

const Location = (props) => {
    const dateTime = getDateTime(props.offset, props.language);
    return (
        <div className={`${props.className} location`}>
            <p className='location__place'>{props.place}</p>
            <p className='location__date-time'>{dateTime}</p>
        </div>
    )
}
export default Location;