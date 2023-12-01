import React from 'react';
import styles from './styles.module.css';
import logo from '../../assets/header/logo.png';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo_container}>
                    <div className={styles.logo__img}>
                        <a href="https:\\google.com">
                            <img src={logo} alt="logo" width={50} height={40} />
                        </a>
                    </div>
                    <p className={styles.logo__text}>currency converter</p>
                </div>
            </div>
        </header>
    );
};

export default Header;