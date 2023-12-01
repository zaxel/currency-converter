import React, { useState, useEffect } from 'react';
import { formateRate } from '../../helpers/formateRate';
import { ICurRatesProps } from '../../interfaces';
import { useChangedRatesState } from '../../store/changedRatesState';
import CurRateInactive from '../curRateInactive/CurRateInactive';
import CurRateActive from '../curRateActive/CurRateActive';
import { ifFitsLimits } from '../../helpers/ifFitsLimits';



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

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(formateRate(e.target.value));
        setConfirmBtnDisabled(!ifFitsLimits(e.target.value, rate));
    }
    const onStatContainerClick = () => {
        setDisplayInput(true)
    }
    const onConfirmBtnClick = () => {
        setRateData(()=>input);
        setDisplayInput(false);
        setDisplayEditableIcon(false);
        addRates({ rate: input, operation, ccy});
    }
    const onRejectBtnClick = () => {
        setInput(formateRate(rate));
        setDisplayInput(false);
        setDisplayEditableIcon(false);
    }

    return (
        displayInput
            ? <CurRateActive input={input}
                             onInputChange={onInputChange} 
                             confirmBtnDisabled={confirmBtnDisabled} 
                             onConfirmBtnClick={onConfirmBtnClick} 
                             onRejectBtnClick={onRejectBtnClick}/>
            
            : <CurRateInactive setDisplayEditableIcon={setDisplayEditableIcon} 
                                onStatContainerClick={onStatContainerClick} 
                                displayEditableIcon={displayEditableIcon}
                                rateData={rateData}/> 
    )
}

export default CurRate;