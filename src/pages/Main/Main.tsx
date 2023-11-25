import React from 'react';
import styles from './styles.module.css';
import CurList from '../../components/curList/CurList';
import CurItemHeader from '../../components/curItemHeader/CurItemHeader';

const Main = () => {
  return (
    <div className={styles.main}>

        <CurItemHeader />
        <CurList />
      
    </div>
  );
};

export default Main;