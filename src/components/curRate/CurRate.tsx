import React, { useState, useEffect, useRef } from 'react';
import { formateRate } from '../../helpers/formateRate';
import styles from './styles.module.css';
import { Form } from 'react-bootstrap';
import pencil_image from '../../assets/converter/pencil.svg';

const CurRate = ({ rate }: { rate: string }) => {
    
    
    const [rateData, setRateData] = useState('0');
    const [displayInput, setDisplayInput] = useState(false);
    const [input, setInput] = useState(formateRate(rate));
    const [displayEditableIcon, setDisplayEditableIcon] = useState(false);
    const [confirmBtnDisabled, setConfirmBtnDisabled] = useState(false);

    useEffect(()=>{
        setRateData(()=>rate);
    },[])
    

    const ifFitsLimits = (modifiedRate: string) => {
        const rateNumber = Number(rate);
        const max = rateNumber + rateNumber*.1;
        const min = rateNumber - rateNumber*.1;
        if(Number(modifiedRate)>max || Number(modifiedRate)<min){
            return false;
        }
        return true;
    }
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(formateRate(e.target.value));
        setConfirmBtnDisabled(!ifFitsLimits(e.target.value));
    }
    const onStatContainerClick = () => {
        setDisplayInput(true)
    }

    const onConfirmBtnClick = () => {
        setRateData(()=>input);
        setDisplayInput(false);
        setDisplayEditableIcon(false)
    }
    const onRejectBtnClick = () => {
        setInput(formateRate(rate));
        setDisplayInput(false);
        setDisplayEditableIcon(false);
    }

    return (
        displayInput
            ? <div className={styles.input_container}>
                <Form.Control value={+input} onChange={onInputChange} className={styles.input_number} type="number" placeholder="amount" step={0.1} />
                <div className={styles.confirmBtns__container}>
                    <button disabled={confirmBtnDisabled} className={confirmBtnDisabled ? styles.disabled : ''} onClick={onConfirmBtnClick}>v</button>
                    <button onClick={onRejectBtnClick}>x</button>
                </div>
            </div>



            : <div className={styles.static_container} 
                onMouseOver={()=>setDisplayEditableIcon(true)} 
                onMouseOut={()=>setDisplayEditableIcon(false)}
                onClick={onStatContainerClick}>
                    {displayEditableIcon && <div className={styles.static_container__img} > 
                        <img src={pencil_image} alt='editable content icon' />
                </div>}
                <div className={styles.item_static}>{formateRate(rateData)}</div>
            </div>
    )
}

export default CurRate;