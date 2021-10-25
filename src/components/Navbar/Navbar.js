import React, { useState} from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
		setButton(false);
		} else {
		setButton(true);
		}
	};

	window.addEventListener('resize', showButton);

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
						<span>TASK</span>Manager
					</Link>

					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>

					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='/' className='nav-links active' onClick={closeMobileMenu}>
								About us
							</Link>
						</li>
						
						<li className='nav-item'>
							<Link
								to='/'
								className='nav-links'
								onClick={closeMobileMenu}
							>
								Cases
							</Link>
						</li>
						
						<li className='nav-item'>
							<Link
								to='/'
								className='nav-links'
								onClick={closeMobileMenu}
							>
								Resources
							</Link>
						</li>
					</ul>
					
					<Link
						to='/sign-in'
						className="btn-mobile"
						onClick={closeMobileMenu}
						>
						{button && <Button buttonStyle='btn--primary'>Sign In</Button>}
					</Link>
				</div>
			</nav>
		</>
	);
}

export default Navbar;