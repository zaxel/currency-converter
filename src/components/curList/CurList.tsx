import React from 'react';
import styles from './styles.module.css';
import CurItem from '../curItem/CurItem';

const CurList = () => {
    return (
        <div className={styles.currency__list}>
            <CurItem />
            <CurItem />
            <CurItem />
            <CurItem />
            <CurItem />
            <CurItem />
            <CurItem />
            <CurItem />
            
        </div>
    );
};

export default CurList;