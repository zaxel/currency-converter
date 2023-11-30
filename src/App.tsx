import React, { useEffect } from 'react';
import './App.css';
import Main from './pages/Main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import useSWR from 'swr'
import { Rates, URL } from './constants';
import Service from './pages/Service/Service';
import { fetcher } from './helpers/fetcher';

function App() {
  // const { data: rates, error, isLoading } = useSWR(URL, fetcher);

  // if (error)
  //   return <Service text='Oops, something went wrong!' color='red'/>
  // if (isLoading)
  //   return <Service text='Loading...' color='#FCFDFD'/>


  return (
    <div className='wrapper'>
      <Header />
      <Main rates={Rates}/>
      <Footer />
    </div>
  )
}

export default App;
