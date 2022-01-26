//import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './StoreContext';


let rerenderEntureTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<StoreContext.Provider value={store}>
				<App />
			</StoreContext.Provider>

		</BrowserRouter>, document.getElementById('root')
	);
}



rerenderEntureTree(store.getState());
store.subscribe(() => {
	let state = store.getState(); //отдаем state в ререндер
	rerenderEntureTree(state);
}); //отправляем функцию для её вызова коллбек