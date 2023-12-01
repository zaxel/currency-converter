import React from 'react';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css';
import { IFieldsetProps } from '../../interfaces';

const Fieldset = ({onInputChange, val, onSelectChange, selectVal, legend, options=[], isDisabled}: IFieldsetProps) => {
    return (
        <fieldset>
            <legend>{legend}</legend>
            <Form.Control disabled={isDisabled} value={+val} onChange={onInputChange} className={styles.input_number} type="number" placeholder="amount" step={0.1} />
            <Form.Select value={selectVal} onChange={onSelectChange} className={styles.select}>
                {options.map((op,i)=>{
                        return <option value={op} key={op}>{op}</option> 
                })}
            </Form.Select>
        </fieldset>
    );
};

export default Fieldset;