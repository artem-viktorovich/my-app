//import React from 'react' ;
import './App.css';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Profile from './components/Profile/Profile.jsx';
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navbar/Navigation.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
	  <BrowserRouter>
			<div className='app-wrapper'> 
				<Header />
				<Navigation />
				<section className='app-wrapper-content'>
						<Route path='/Profile' component = {Profile} />	
						<Route path='/Dialogs' component = {Dialogs} />
						<Route path='/News' component = {News} />
						<Route path='/Music' component = {Music} />
						<Route path='/Settings' component = {Settings} />
				</section>

				
			</div>
	  </BrowserRouter>
	

  );
}

export default App;
