import React, { useEffect } from 'react';
import './App.css';
import Main from './pages/Main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// import useSWR from 'swr'
// import { URL } from './constants';
import { Rates as rates} from './constants'; 
// import Service from './pages/Service/Service';
// import { fetcher } from './helpers/fetcher';
import { useEmptyChangedCurrenciesStore } from './hooks/useEmptyChangedCurrenciesStore';

function App() {
  ////in case of CORS error use Rates json exported from constants as mock-data
  ////comment useSwr line, and all related conditional checks 

  // const { data: rates, error, isLoading } = useSWR(URL, fetcher);
  
  const setEmptyRates = useEmptyChangedCurrenciesStore(rates || []);

  useEffect(()=>{
    setEmptyRates();
  },[rates])

  // if (error)
  //   return <Service text='Oops, something went wrong!' color='red'/>
  // if (isLoading)
  //   return <Service text='Loading...' color='#FCFDFD'/>

  return (
    <div className='wrapper'>
      <Header />
      <Main rates={rates}/>
      <Footer />
    </div>
  )
}

export default App;
