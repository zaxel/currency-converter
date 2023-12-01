import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css';
import swap from '../../assets/converter/swap.png';
import { CurOptions } from '../../constants';
import Fieldset from '../fieldsetConverter/Fieldset';
import { getConvertedVal } from '../../helpers/calcConverteValue';
import { useFromCurStore } from '../../store/fromCurState';
import { useToCurStore } from '../../store/toCurState';
import { CurrenciesType, IRates, OperationsTypes } from '../../interfaces';
import { onSwapButtonChange } from '../../helpers/swapFromTo';
import { useIsRateChanged } from '../../hooks/useIsRateChanged';
import { useChangedRatesState } from '../../store/changedRatesState';

interface IFilterReturnData {
    saleCur: CurrenciesType,
    buyCur: CurrenciesType,
}

const Converter = ({ rates }: IRates) => {


    const inputFrom = useFromCurStore((state) => state.inputFrom);
    const setInputFrom = useFromCurStore((state) => state.updateInputFrom);

    const selectFrom = useFromCurStore((state) => state.selectFrom);
    const setSelectFrom = useFromCurStore((state) => state.updateSelectFrom);

    const inputTo = useToCurStore((state) => state.inputTo);
    const setInputTo = useToCurStore((state) => state.updateInputTo);

    const selectTo = useToCurStore((state) => state.selectTo);
    const setSelectTo = useToCurStore((state) => state.updateSelectTo);

    const filterCurrencies = (): IFilterReturnData => {
        if (selectFrom === 'UAH' || selectTo === 'UAH') {
            return { saleCur: selectTo, buyCur: selectTo }
        }
        return { saleCur: selectTo, buyCur: selectFrom }
    }

    const [isSaleRateChanged] = useIsRateChanged(filterCurrencies().saleCur, 'sale');
    const [isBuyRateChanged] = useIsRateChanged(filterCurrencies().buyCur, 'buy');
    const changedRates = useChangedRatesState((state) => state.rates);


    useEffect(() => {
        setInputTo(getConvertedVal(rates, changedRates, inputFrom, selectFrom, selectTo, isSaleRateChanged, isBuyRateChanged));
    }, [inputFrom, inputTo, selectFrom, selectTo, changedRates])


    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value).toFixed(2)
        setInputFrom(val);

    }
    const onSelectFromChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectFrom(e.target.value as CurrenciesType)
    }
    const onSelectToChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectTo(e.target.value as CurrenciesType);
    }
    const onSwapButtonChangeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        onSwapButtonChange(inputTo, selectTo, selectFrom, setInputFrom, setSelectFrom, setSelectTo)
    }

    return (
        <div className={styles.converter}>
            <Form className={styles.form}>
                <Fieldset onSelectChange={onSelectFromChange} selectVal={selectFrom} onInputChange={onInputChange} legend={'change'} options={CurOptions} val={inputFrom} isDisabled={false} />
                <Button onClick={onSwapButtonChangeHandler} className={styles.button}>
                    <img width={20} height={20} src={swap} alt="swap currencies around" />
                </Button>
                <Fieldset onSelectChange={onSelectToChange} selectVal={selectTo} onInputChange={onInputChange} legend={'get'} options={CurOptions} val={inputTo} isDisabled={true} />
            </Form>
        </div>
    );
};

export default Converter;