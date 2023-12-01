import React from 'react';
import styles from './styles.module.css';

const CurItemHeader = () => {
    return (
        <div className={styles.cur_header}>
            <div>currencies</div>
            <div>buy</div>
            <div>sel</div>
        </div>
    );
};

export default CurItemHeader;