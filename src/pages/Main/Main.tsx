import React from 'react';
import styles from './styles.module.css';
import CurList from '../../components/curList/CurList';
import CurItemHeader from '../../components/curItemHeader/CurItemHeader';
import Converter from '../../components/converter/Converter';
import { IRates } from '../../interfaces';

const Main = ({rates}: IRates) => {
  return (
    <div className={styles.main}>
      <div className="currencies_data">
        <CurItemHeader />
        <CurList rates={rates}/>
      </div>
       <Converter rates={rates}/>
    </div>
  );
};

export default Main;