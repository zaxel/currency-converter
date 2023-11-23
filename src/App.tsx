import React from 'react';
import './App.css';
import Main from './pages/Main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App;
