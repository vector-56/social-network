import React from 'react';
import Header from './Header/Header';
import Wrapper from './Wrapper/Wrapper';
import Footer from './Footer/Footer';
import stl from './App.module.css';

const App = () => {
  return (
    <div className={stl.wrapper}>
      <Header />
      <Wrapper />
      <Footer />
    </div>
  );
}

export default App;
