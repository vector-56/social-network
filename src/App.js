import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import stl from './App.module.css';
import Wrapper from './Wrapper/Wrapper'
import Profile from './Wrapper/Profile/Profile';
import Message from './Wrapper/Message/Message';
import News from './Wrapper/News/News';
import Music from './Wrapper/Music/Music';
import Setting from './Wrapper/Setting/Setting';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className={stl.wrapper}>
      <Header />
      <div className={stl.content}>
      <Wrapper />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/message" element={<Message />} />
        <Route path="/news" element={<News />} />
        <Route path="/music" element={<Music />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
