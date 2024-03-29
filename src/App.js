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

const App = (props) => {

  return (
    <div className={stl.wrapper}>
      <Header />
      <div className={stl.content}>
      <Wrapper friendsData={props.friendsData} />
      <Routes>
        <Route path="/profile" element={<Profile PostsData={props.PostsData}/>} />
        <Route path="/message" element={<Message DialogsData={props.DialogsData} MessagesData={props.MessagesData}/>} />
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
