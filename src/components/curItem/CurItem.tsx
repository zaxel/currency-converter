import React from 'react';
import styles from './styles.module.css';
import ua from '../../assets/flags/ua.svg';
import ch from '../../assets/flags/ch.svg';

const CurItem = () => {
    return (
        <div className={styles.cur_item}>
            
            <div className={styles.cur_item__cur}>
                <div className={styles.cur_item__flag_l}>
                    <img src={ch} alt="currency flag" />
                </div>
                <p className={styles.cur_item__name_l}>CHF /</p>
                <div className={styles.cur_item__flag_r}>
                    <img src={ua} alt="currency flag" />
                </div>
                <p className={styles.cur_item__name_r}>UAH</p>
            </div>
            <div className={styles.cur_item__price}>25.3</div>
            <div className={styles.cur_item__price}>37.6</div>
        </div>
    );
};

export default CurItem;