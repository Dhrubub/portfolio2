import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import './navbar-styles.css';

const NavBar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	const off = -82;

	return (
		<div className='header text-custom z-50 bg-custom'>
			<Link
				onClick={handleClick}
				spy={true}
				smooth={true}
				offset={off}
				duration={500}
				to='home'
			>
				<img src='/assets/logo.png' alt='portfolio logo'></img>
			</Link>
			<ul className={click ? 'nav-menu active ' : 'nav-menu'}>
				<li>
					<Link
						onClick={handleClick}
						spy={true}
						smooth={true}
						offset={off}
						duration={500}
						to='about'
					>
						about
					</Link>
				</li>
				<li>
					<Link
						onClick={handleClick}
						spy={true}
						smooth={true}
						offset={off}
						duration={500}
						to='experience'
					>
						experience
					</Link>
				</li>
				<li>
					<Link
						onClick={handleClick}
						spy={true}
						smooth={true}
						offset={off}
						duration={500}
						to='projects'
					>
						projects
					</Link>
				</li>
				<li>
					<Link
						onClick={handleClick}
						spy={true}
						smooth={true}
						offset={off}
						duration={500}
						to='contact'
					>
						contact
					</Link>
				</li>
			</ul>
			<div className='hamburger' onClick={handleClick}>
				{click ? (
					<FaTimes size={20} className='purple' />
				) : (
					<FaBars size={20} className='purple' />
				)}
			</div>
		</div>
	);
};

export default NavBar;
