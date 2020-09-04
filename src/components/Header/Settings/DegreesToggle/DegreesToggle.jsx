import React from 'react';
import './DegreesToggle.scss';
import { DEGREES } from '../../../../constants/constants';

const DegreesToggle = (props) => {
    const activeClassName = 'degrees-toggle__degrees_active';
    const isF = props.degrees === DEGREES.F;

    return (
        <div className={`${props.className} degrees-toggle`}>
            <div
                className={`degrees-toggle__degrees ${isF ? activeClassName : ''}`}
                onClick={() => props.selectDegrees(DEGREES.F)}
            >
                {DEGREES.F}
            </div>
            <div
                className={`degrees-toggle__degrees ${isF ? '' : activeClassName}`}
                onClick={() => props.selectDegrees(DEGREES.C)}
            >
                {DEGREES.C}
            </div>
        </div>
    )
}
export default DegreesToggle;