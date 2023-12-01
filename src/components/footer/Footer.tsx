import React from 'react';
import styles from './styles.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.copyrights}>
                <p className={styles.copyrights__year}>{new Date().getFullYear()}</p>
                <p className={styles.copyrights__text}>all rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;