import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = () => {
	useEffect(() => {
		// Init Materialize
		M.AutoInit();
	});

	return (
		<nav style={{ marginBottom: '3%' }}>
			<div
				className='nav-wrapper'
				style={{ paddingLeft: '1%' }}
			>
				<a href='#!' className='brand-logo'>
					It Logger
				</a>
				<ul
					id='nav-mobile'
					className='right hide-on-med-and-down'
				>
					<li>
						<Link to='/dashboard'>
							Dashboard
						</Link>
					</li>
					<li>
						<Link to='/login'>Login</Link>
					</li>
					<li>
						<Link to='/register'>
							Register
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
