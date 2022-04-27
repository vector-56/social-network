import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import stl from './App.module.css';
import Wrapper from './Wrapper/Wrapper'
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className={stl.wrapper}>
        <Header />
        <Wrapper />
        <Footer />
      </div>
      </BrowserRouter>
  );
}

export default App;
