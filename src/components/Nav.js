import '../assets/styles/components/nav.less';
import React from 'react';
import { Link } from 'react-router';

export const Nav = () => {
	return (
		<nav className='c-nav'>
			<h1>
				<Link to={'/'} activeClassName={'active'}>Yinstagram</Link>
			</h1>
		</nav>
	)
}