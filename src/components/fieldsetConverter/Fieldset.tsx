import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css';

interface props{
    legend: string,
    options: string[],
    initNumber: number,
    isDisabled: boolean
}

const Fieldset = ({legend, options=[], initNumber, isDisabled}: props) => {
    const [inputNumber, setInputNumber] = useState(initNumber.toString());

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputNumber(Number(e.target.value).toFixed(2));
    }
    return (
        <fieldset>
            <legend>{legend}</legend>

            <Form.Control disabled={isDisabled} value={+inputNumber} onChange={onInputChange} className={styles.input_number} type="number" placeholder="amount" step={0.1} />

            <Form.Select className={styles.select}>
                {options.map((op,i)=>{
                    if(i===0)
                        return <option>{op}</option>
                        return <option value={i}>{op}</option> 
                })}
                
            </Form.Select>
        </fieldset>
    );
};

export default Fieldset;