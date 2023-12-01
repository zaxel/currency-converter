import React from 'react';
import styles from './styles.module.css';
import { Form } from 'react-bootstrap';
import { ICurRateActiveProps } from '../../interfaces';

const CurRateActive = ({input, onInputChange, confirmBtnDisabled, onConfirmBtnClick, onRejectBtnClick}: ICurRateActiveProps) => {
    return (
        <div className={styles.input_container}>
            <Form.Control value={+input} onChange={onInputChange} className={styles.input_number} type="number" placeholder="amount" step={0.1} />
            <div className={styles.confirmBtns__container}>
                <button disabled={confirmBtnDisabled} className={confirmBtnDisabled ? styles.disabled : ''} onClick={onConfirmBtnClick}>v</button>
                <button onClick={onRejectBtnClick}>x</button>
            </div>
        </div>
    );
};

export default CurRateActive;