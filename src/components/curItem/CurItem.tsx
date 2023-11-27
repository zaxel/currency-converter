import React from 'react';
import styles from './styles.module.css';
import ua from '../../assets/flags/ua.svg';
import ch from '../../assets/flags/ch.svg';
import cz from '../../assets/flags/cz.svg';
import gb from '../../assets/flags/gb.svg';
import il from '../../assets/flags/il.svg';
import jp from '../../assets/flags/jp.svg';
import no from '../../assets/flags/no.svg';
import pl from '../../assets/flags/pl.svg';
import se from '../../assets/flags/se.svg';

import { IRate } from '../../interfaces';

type Props = Omit<IRate, 'base_ccy'>;

const CurItem = ({ccy, buy, sale}:Props) => {

    const getFlag = (name: string) =>{
        switch(name){
            case "UAH":
                return ua;
            case "CHF":
                return ch;
            case "CZK":
                return cz;
            case "GBP":
                return gb;
            case "ILS":
                return il;
            case "JPY":
                return jp;
            case "NOK":
                return no;
            case "PLZ":
                return pl;
            case "SEK":
                return se;
            default:
                return ua;
        }
   
    } 
        
    return (
        <li className={styles.cur_item}>
            
            <div className={styles.cur_item__cur}>
                <div className={styles.cur_item__flag_l}>
                    <img src={getFlag(ccy)} alt="currency flag" />
                </div>
                <p className={styles.cur_item__name_l}>CHF /</p>
                <div className={styles.cur_item__flag_r}>
                    <img src={ua} alt="currency flag" />
                </div>
                <p className={styles.cur_item__name_r}>UAH</p>
            </div>
            <div className={styles.cur_item__price}>{Number(buy).toFixed(2)}</div>
            <div className={styles.cur_item__price}>{Number(sale).toFixed(2)}</div>
        </li>
    );
};

export default CurItem;