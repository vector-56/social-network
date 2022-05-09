import React from 'react';
import ReactDOM from 'react-dom/client';
import './../index.css';
import App from './../App';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './State';

export let rerenderEntireTree = (state) => {

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          PostsData={state.profilePage.PostsData}
          DialogsData={state.messagePage.DialogsData}
          MessagesData={state.messagePage.MessagesData}
          friendsData={state.wrapperPage.friendsData}
          addPost={addPost}
        />
      </BrowserRouter>
    </React.StrictMode>
  );

}