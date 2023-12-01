import React from 'react';
import styles from './styles.module.css';
import pencil_image from '../../assets/converter/pencil.svg';
import { formateRate } from '../../helpers/formateRate';
import { ICurRateInactiveProps } from '../../interfaces';

const CurRateInactive = ({setDisplayEditableIcon, onStatContainerClick, displayEditableIcon, rateData}: ICurRateInactiveProps) => {
    return (
        <div className={styles.static_container}
            onMouseOver={() => setDisplayEditableIcon(true)}
            onMouseOut={() => setDisplayEditableIcon(false)}
            onClick={onStatContainerClick}>
            {displayEditableIcon && <div className={styles.static_container__img} >
                <img src={pencil_image} alt='editable content icon' />
            </div>}
            <div className={styles.item_static}>{formateRate(rateData)}</div>
        </div>
    );
};

export default CurRateInactive;