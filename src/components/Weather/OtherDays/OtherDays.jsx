import React from 'react';
import './OtherDays.scss';
import iconCodes from '../../../constants/iconCodes';

const OtherDays = (props) => {

    return (
        <div className={`${props.className} other-days`}>
            {props.otherDays.map((day) => {
                const iconSrc = iconCodes[day.icon];
                const date = new Date(day.date);
                const weekday = date.toLocaleString(props.language, {weekday: 'long'})
                return (
                    <div
                        className='other-days__other-day'
                        key={day.id}
                    >
                        <p className='other-days__weekday'>{weekday}</p>
                        <p className='other-days__temp'>{day.temp}</p>
                        <div
                            className='other-days__icon'
                            style={{ backgroundImage: `url(${require('../../../' + iconSrc)})` }}
                        >
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default OtherDays;