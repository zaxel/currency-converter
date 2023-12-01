import React from 'react';
import styles from './styles.module.css';
import CurItem from '../curItem/CurItem';
import { IRates } from '../../interfaces';

const CurList = ({rates}: IRates) => {
    return (
        <ul className={styles.currency__list}>
            {rates.map(item=>{
                return <CurItem key={item.ccy} ccy={item.ccy} buy={item.buy} sale={item.sale}/>
            })}
        </ul>
    );
};

export default CurList;