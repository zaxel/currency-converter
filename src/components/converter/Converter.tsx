import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css';
import swap from '../../assets/converter/swap.png';
import Fieldset from '../fieldsetConverter/Fieldset';
import { InitValue } from '../../constants';


const Converter = () => {
    const optionsLeft: Array<string> = ['UAH', 'USD', 'GBP', 'CHZ', 'PZL'];
    const optionsRight: Array<string> = ['USD', 'UAH', 'GBP', 'CHZ'];
    
    return (
        <div className={styles.converter}>


            <Form className={styles.form}>
                <Fieldset legend={'change'} options={optionsLeft} initNumber={InitValue} isDisabled={false}/>
                <Button className={styles.button}>
                    <img width={20} height={20} src={swap} alt="swap currencies around" />
                </Button>
                <Fieldset legend={'get'} options={optionsRight} initNumber={InitValue} isDisabled={true}/>
            </Form>
        </div>
    );
};

export default Converter;