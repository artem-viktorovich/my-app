//import React from 'react' ;
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
// import Profile from './components/Profile/Profile.jsx';
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navbar/Navigation.jsx';

const App = () => {
  return (
	<div className='app-wrapper'> 
		<Header />
		<Navigation />
		<section className='app-wrapper-content'>
				<Dialogs />
		</section>
		
		{/* <Profile /> */}
	</div>

  );
}

export default App;
