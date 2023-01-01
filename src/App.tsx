import './index.css';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

import { Route, Routes } from 'react-router-dom';
import Experience from './components/experience';
import NavBar from './components/navbar';

function App() {
	return (
		<div>
			<div className='sticky top-0 z-50 px-5'>
				<NavBar />
			</div>

			<div className='relative top-0.5 w-1/2 min-w-[900px] mx-auto'>
				<Home />
				<About />
				<Experience />
				<Projects />
				<Contact />
			</div>
		</div>
	);
}

export default App;
