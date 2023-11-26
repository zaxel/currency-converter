import React from 'react';
import styles from './styles.module.css';
import CurList from '../../components/curList/CurList';
import CurItemHeader from '../../components/curItemHeader/CurItemHeader';
import Converter from '../../components/converter/Converter';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className="currencies_data">
        <CurItemHeader />
        <CurList />
      </div>
       <Converter rate={1.5}/>
    </div>
  );
};

export default Main;