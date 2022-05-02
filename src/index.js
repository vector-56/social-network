import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let PostsData = [
  { id: 1, message: 'First Post', likesCount: 13 },
  { id: 2, message: 'Second Post', likesCount: 3 },
  { id: 3, message: 'Third Post', likesCount: 53 },
  { id: 4, message: 'Four Post', likesCount: 34 },
  { id: 5, message: 'Fifth Post', likesCount: 76 },
  { id: 5, message: 'Six Post', likesCount: 6 },
]

let DialogsData = [
  { id: 1, dialogName: 'Andrew' },
  { id: 2, dialogName: 'Bryan' },
  { id: 3, dialogName: 'Damien' },
  { id: 4, dialogName: 'Alexander' },
  { id: 5, dialogName: 'Sergey' },
  { id: 6, dialogName: 'Matt' },
]

let MessagesData = [
  { id: 1, dialogText: 'Hello' },
  { id: 2, dialogText: 'Good' },
  { id: 3, dialogText: 'Bye' },
  { id: 4, dialogText: 'Never' },
  { id: 5, dialogText: 'Say' },
]

let friendsData = [
  {id: 1 , name: 'Alex'},
  {id: 2 , name: 'Damien'},
  {id: 3 , name: 'Kliff'},
  {id: 4 , name: 'Olly'},
  {id: 5 , name: 'Nick'},
] 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App 
      PostsData={PostsData} 
      DialogsData={DialogsData} 
      MessagesData={MessagesData}
      friendsData={friendsData}
      />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
