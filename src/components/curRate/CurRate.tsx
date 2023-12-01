import React, { useState, useEffect, useRef } from 'react';
import { formateRate } from '../../helpers/formateRate';
import styles from './styles.module.css';
import { Form } from 'react-bootstrap';

import { useIsRateChanged } from '../../hooks/useIsRateChanged';
import { ICurRatesProps } from '../../interfaces';
import { useChangedRatesState } from '../../store/changedRatesState';
import CurRateInactive from '../curRateInactive/CurRateInactive';



const CurRate = ({ rate, operation, ccy}: ICurRatesProps) => {
    
    
    const [rateData, setRateData] = useState('0');
    const [displayInput, setDisplayInput] = useState(false);
    const [input, setInput] = useState(formateRate(rate));
    const [displayEditableIcon, setDisplayEditableIcon] = useState(false);
    const [confirmBtnDisabled, setConfirmBtnDisabled] = useState(false);
    
     

    const addRates = useChangedRatesState((state) => state.addRates);

    useEffect(()=>{
        setRateData(()=>rate);
    },[])

    const saveToChangedRatesState = () => {
        addRates({ rate: input, operation, ccy})
    }
    

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
        setDisplayEditableIcon(false);

        saveToChangedRatesState();

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



            : <CurRateInactive setDisplayEditableIcon={setDisplayEditableIcon} 
                                onStatContainerClick={onStatContainerClick} 
                                displayEditableIcon={displayEditableIcon}
                                rateData={rateData}/> 
                
            
    )
}

export default CurRate;