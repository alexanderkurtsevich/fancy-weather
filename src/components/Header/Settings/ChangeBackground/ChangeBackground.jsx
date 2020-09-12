import React from 'react';
import './ChangeBackground.scss';
import RefreshImage from '../../../../assets/images/change-bg-refresh.svg'

const ChangeBackground = (props) => {

    return (
        <div
            className={`${props.className} change-background`}
            onClick={props.changeBackground}
        >
            <img
                className='change-background__image'
                src={RefreshImage}
                alt='Refresh'
            />
        </div>
    )
}
export default ChangeBackground;