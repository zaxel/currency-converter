import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css';
import swap from '../../assets/converter/swap.png';
import { CurOptions, InitValue } from '../../constants';
import Fieldset from '../fieldsetConverter/Fieldset';
import { IConverterProps } from '../../interfaces';
import { log } from 'console';



const Converter = ({rate}: IConverterProps) => {
    
    

    const getConvertedVal = (val: string, rate: number): string => {
        return (+val*rate).toFixed(2)
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value).toFixed(2)
        setInputFrom(val);
        setInputTo(getConvertedVal(val, rate));
    }
    const onSelectFromChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectFrom(e.target.value)
    }
    const onSelectToChange = (e: any) => {
        setSelectTo(e.target.value);
    }
    
    const [inputFrom, setInputFrom] = useState(InitValue);
    const [inputTo, setInputTo] = useState(getConvertedVal(InitValue, rate));
    const [selectFrom, setSelectFrom] = useState('UAH');
    const [selectTo, setSelectTo] = useState('CHF');

    return (
        <div className={styles.converter}>


            <Form className={styles.form}>
                <Fieldset onSelectChange={onSelectFromChange} selectVal={selectFrom} onInputChange={onInputChange} legend={'change'} options={CurOptions} val={inputFrom} isDisabled={false}/>
                <Button className={styles.button}>
                    <img width={20} height={20} src={swap} alt="swap currencies around" />
                </Button>
                <Fieldset onSelectChange={onSelectToChange} selectVal={selectTo} onInputChange={onInputChange} legend={'get'} options={CurOptions} val={inputTo} isDisabled={true}/>
            </Form>
        </div>
    );
};

export default Converter;