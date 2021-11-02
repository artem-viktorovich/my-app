import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
	{ id: 1, message: 'Привет бейби', LikesCount: 22},
	{ id: 2, message: 'Здоров', LikesCount: 21 },
	{ id: 2, message: 'Пока', LikesCount: 21 },
	{ id: 2, message: 'Йоу', LikesCount: 21 }
]
let dialogs = [
	{ id: 1, name: 'Dimych' },
	{ id: 2, name: 'Andrew' },
	{ id: 3, name: 'Sveta' },
	{ id: 4, name: 'Sasha' },
	{ id: 5, name: 'Valera' }
]
let messages = [
	{ id: 1, message: 'Привет' },
	{ id: 2, message: 'Как дела?' },
	{ id: 3, message: 'Ты кто?' },
	{ id: 4, message: 'Пошли гулять' },
	{ id: 5, message: 'Хай' }
]
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
