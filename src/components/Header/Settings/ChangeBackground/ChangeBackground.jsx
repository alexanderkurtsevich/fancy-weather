import React from 'react';
import './ChangeBackground.scss';
import RefreshImage from '../../../../assets/images/change-bg-refresh.svg'

const ChangeBackground = (props) => {
    const loadingClassName = props.isBgLoading
        ? 'change-background__image_loading' : '';
    return (
        <div
            className={`${props.className} change-background`}
            onClick={props.changeBackground}
        >
            <img
                className={`change-background__image ${loadingClassName}`}
                src={RefreshImage}
                alt='Refresh'
            />
        </div>
    )
}
export default ChangeBackground;