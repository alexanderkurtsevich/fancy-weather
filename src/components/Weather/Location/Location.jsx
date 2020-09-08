import React from 'react';
import './Location.scss';

const Location = (props) => {

    return (
        <div className={`${props.className} location`}>
            <p className='location__place'>{props.place}</p>
            <div className='location__date-time'>

            </div>
        </div>
    )
}
export default Location;