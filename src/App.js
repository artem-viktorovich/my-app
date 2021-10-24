//import React from 'react' ;
import './App.css';
import Profile from './components/Profile.jsx';
import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';

const App = () => {
  return (
	<div className='app-wrapper'> 
		<Header />
		<Navigation />
		<Profile />
	</div>
  );
}

export default App;
