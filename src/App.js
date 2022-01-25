import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navbar/Navigation';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
// import { addPost } from './redux/state';


const App = (props) => {

	return (
		<div className='app-wrapper'>
			<Header />
			<Navigation />
			<section className='app-wrapper-content'>
				<Route path='/Profile'
					render={() => <Profile store={props.store} />} />
				<Route path='/Dialogs'
					render={() => <DialogsContainer
						store={props.store} />} />
				<Route path='/News' render={() => <News />} />
				<Route path='/Music' render={() => <Music />} />
				<Route path='/Settings' render={() => <Settings />} />
			</section>
		</div>



	);
}

export default App;
