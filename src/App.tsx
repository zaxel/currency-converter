import React, { useEffect } from 'react';
import './App.css';
import Main from './pages/Main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import useSWR from 'swr'
import { URL } from './constants';

function App() {

  const fetcher = (url: string) => {
    console.log(url)
    
    return fetch(url).then((res) => res.json())
    // return fetch(url).then((res) => {
    //   throw Error
    // })
  };

  const { data: rates, error, isLoading } = useSWR(URL, fetcher)
  if (error){
    return <div style={{display: 'table-cell',width: '100dvw', height: '100dvh', fontSize: '48px', fontWeight: '500', color: 'red', textAlign: 'center', verticalAlign: 'middle'}}>Error</div>
  }
  if (isLoading){
    return <div style={{display: 'table-cell',width: '100dvw', height: '100dvh', fontSize: '48px', fontWeight: '500', color: '#FCFDFD', textAlign: 'center', verticalAlign: 'middle'}}>Loading</div>
  }
  console.log(rates);

 


  return (
    <div className='wrapper'>
      <Header />
      <Main rates={rates}/>
      <Footer />
    </div>
  )
}

export default App;
