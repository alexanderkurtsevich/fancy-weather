import React from 'react';
import './Coordinates.scss';
import { useTranslation } from "react-i18next";

const Coordinates = (props) => {
    const { t } = useTranslation();
    return (
        <div className={`${props.className} coordinates`}>
            <p className='coordinates__text'>{`${t('latitude')} ${props.lat}`} </p>
            <p className='coordinates__text'>{`${t('longtitude')} ${props.lng}`} </p>
        </div>
    )
}
export default Coordinates;