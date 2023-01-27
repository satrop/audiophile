import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import SectionLinks from '../SectionLinks/SectionLinks';
import MiniCheckOutProduct from '../MiniCheckOutProduct/MiniCheckOutProduct';
import menuIcon from '/assets/other/tablet/icon-hamburger.svg';
import cartIcon from '/assets/other/desktop/icon-cart.svg';
import logo from '/assets/other/desktop/logo.svg';

import './Nav.scss';

const Nav = () => {
	const [active, setActive] = useState(false);
	let [isPressed, setIsPressed] = useState(false);

	const handleClick = () => {
		setActive((prevActive) => !prevActive);
		setIsPressed(!isPressed);
	};

	const [cartActive, setCartActive] = useState(false);
	const [cartFadeActive, setCartFadeActive] = useState(false);

	const cartClick = () => {
		setCartActive((prevActive) => !prevActive);
		setCartFadeActive((prevActive) => !prevActive);
	};

	const closeMenu = () => {
		setActive(false);
		setCartActive(false);
		setCartFadeActive(false);
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
					<button className="cart hide-dt" onClick={cartClick}>
						<img
							src={cartIcon}
							alt=""
							aria-label="Got to checkout"
						/>
					</button>
					<MiniCheckOutProduct
						do={closeMenu}
						extraClass={`${cartActive ? 'active' : ''}`}
					/>
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
				className={`fade-out ${active ? 'active' : ''} ${
					cartFadeActive ? 'active' : ''
				}`}
				onClick={closeMenu}></div>
		</>
	);
};

export default Nav;
