//import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntureTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} dispath={store.dispath.bind(store)} 	/>
		</BrowserRouter>,	document.getElementById('root')
	);
}



rerenderEntureTree(store.getState());
store.subscribe(rerenderEntureTree); //отправляем функцию для её вызова коллбек