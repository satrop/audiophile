import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import SectionLinks from '../SectionLinks/SectionLinks';

import menuIcon from '/assets/shared/tablet/icon-hamburger.svg';
import cartIcon from '/assets/shared/desktop/icon-cart.svg';
import logo from '/assets/shared/desktop/logo.svg';

import './Nav.scss';

const Nav = () => {
	const [active, setActive] = useState(false);
	let [isPressed, setIsPressed] = useState(false);

	const handleClick = () => {
		setActive((prevActive) => !prevActive);
		setIsPressed(!isPressed);
	};

	const closeMenu = () => {
		setActive(false);
	};

	return (
		<>
			<div className="nav-bar">
				<div className="content">
					<button
						aria-label="Mobile menu toggle"
						aria-controls="menu"
						aria-pressed={isPressed}
						onClick={handleClick}
						className={`menu-toggle ${active ? 'active' : ''}`}>
						<img src={menuIcon} alt="" />
					</button>
					<NavLink to="/">
						<img
							src={logo}
							alt=""
							aria-label="Logo linking back to home page"
						/>
					</NavLink>
					<NavLink
						to="/checkout"
						className="cart hide-dt"
						aria-label="View shopping cart">
						<img
							src={cartIcon}
							alt=""
							aria-label="Got to checkout"
						/>
					</NavLink>
				</div>
			</div>
			<nav id="main-nav">
				<div id="menu" className={active ? 'active' : ''}>
					<div className="content">
						<SectionLinks handleClick={closeMenu} />
					</div>
				</div>
			</nav>
			<div
				className={`fade-out ${active ? 'active' : ''}`}
				onClick={closeMenu}></div>
		</>
	);
};

export default Nav;
