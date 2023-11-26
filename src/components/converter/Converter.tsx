import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css';
import swap from '../../assets/converter/swap.png';


const Converter = () => {
    const [inputNumber, setInputNumber] = useState('1');

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputNumber(Number(e.target.value).toFixed(2));
    }
    return (
        <div className={styles.converter}>


            <Form className={styles.form}>
                <fieldset className={styles.f_left}>
                    <legend>change</legend>

                    <Form.Control value={+inputNumber} onChange={onInputChange} className={styles.input_number} type="number" placeholder="amount" step={0.1} />

                    <Form.Select className={styles.select}>
                        <option>UAH</option>
                        <option value="1">USD</option>
                        <option value="2">GBP</option>
                        <option value="3">CHZ</option>
                    </Form.Select>
                </fieldset>
                <Button className={styles.button}>
                    <img width={20} height={20} src={swap} alt="swap currencies around" />
                </Button>

                <fieldset className={styles.f_right}>
                    <legend>get</legend>

                    <Form.Control className={styles.input_number} type="number" placeholder="amount" />

                    <Form.Select className={styles.select}>
                        <option>USD</option>
                        <option value="1">UAH</option>
                        <option value="2">GBP</option>
                        <option value="3">CHZ</option>
                    </Form.Select>
                </fieldset>
            </Form>
        </div>
    );
};

export default Converter;