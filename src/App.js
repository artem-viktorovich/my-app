//import React from 'react' ;
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navbar/Navigation';
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
						<Route path='/Profile' render = { () => <Profile/> } />	
						<Route path='/Dialogs' render = { () => <Dialogs/> }/>
						<Route path='/News' render = { () => <News/> } />
						<Route path='/Music'  render = { () => <Music />}/> 
						<Route path='/Settings' render = { () => <Settings/>}/>
				</section>
			</div>
	  </BrowserRouter>
	

  );
}

export default App;
