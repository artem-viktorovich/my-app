//import React from 'react' ;
import './App.css';
import Profile from './components/Profile/Profile.jsx';
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navbar/Navigation.jsx';

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
