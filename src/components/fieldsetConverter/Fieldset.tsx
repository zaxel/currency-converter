import React from 'react';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css';
import { IFieldsetProps } from '../../interfaces';



const Fieldset = ({onInputChange, legend, options=[], val, isDisabled}: IFieldsetProps) => {
    return (
        <fieldset>
            <legend>{legend}</legend>

            <Form.Control disabled={isDisabled} value={+val} onChange={onInputChange} className={styles.input_number} type="number" placeholder="amount" step={0.1} />

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