import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css';
import swap from '../../assets/converter/swap.png';
import { InitValue } from '../../constants';
import Fieldset from '../fieldsetConverter/Fieldset';
import { IConverterProps } from '../../interfaces';



const Converter = ({rate}: IConverterProps) => {
    const optionsLeft: Array<string> = ['UAH', 'USD', 'GBP', 'CHZ', 'PZL'];
    const optionsRight: Array<string> = ['USD', 'UAH', 'GBP', 'CHZ'];
    
    

    const getConvertedVal = (val: string, rate: number): string => {
        return (+val*rate).toFixed(2)
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value).toFixed(2)
        setInputFrom(val);
        setInputTo(getConvertedVal(val, rate));
    }
    
    const [inputFrom, setInputFrom] = useState(InitValue);
    const [inputTo, setInputTo] = useState(getConvertedVal(InitValue, rate));
    

    return (
        <div className={styles.converter}>


            <Form className={styles.form}>
                <Fieldset onInputChange={onInputChange} legend={'change'} options={optionsLeft} val={inputFrom} isDisabled={false}/>
                <Button className={styles.button}>
                    <img width={20} height={20} src={swap} alt="swap currencies around" />
                </Button>
                <Fieldset onInputChange={onInputChange} legend={'get'} options={optionsRight} val={inputTo} isDisabled={true}/>
            </Form>
        </div>
    );
};

export default Converter;