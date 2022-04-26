import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import stl from './App.module.css';
import Wrapper from './Wrapper/Wrapper'
import Sidebar from './Wrapper/Sidebar/Sidebar'

const App = () => {
  return (
      <div className={stl.wrapper}>
        <Header />
        <Sidebar />
        <Wrapper />
        <Footer />
      </div>
  );
}

export default App;
