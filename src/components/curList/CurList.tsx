import React from 'react';
import styles from './styles.module.css';
import CurItem from '../curItem/CurItem';
import { Rates } from '../../constants';

const CurList = () => {
    return (
        <ul className={styles.currency__list}>
            {Rates.map(item=>{
                return <CurItem key={item.ccy} ccy={item.ccy} buy={item.buy} sale={item.sale}/>
            })}
            
        </ul>
    );
};

export default CurList;