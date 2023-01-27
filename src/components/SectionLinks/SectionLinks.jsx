import { Link } from 'react-router-dom';
import { useState } from 'react';

import headphones from '/assets/other/desktop/image-category-thumbnail-headphones.png';
import speakers from '/assets/other/desktop/image-category-thumbnail-speakers.png';
import earphones from '/assets/other/desktop/image-category-thumbnail-earphones.png';

import './SectionLinks.scss';

const SectionLinks = (props) => {
	return (
		<ul className="section-links">
			<li>
				<Link to="/">
					<div className="h6">Home</div>
				</Link>
			</li>
			<li>
				<Link
					to="/headphones"
					onClick={props.handleClick}
					aria-label="Got to headphone pages">
					<img src={headphones} alt="" />
					<div className="h6">Headphones</div>
					<span>
						Shop
						<svg
							width="8"
							height="12"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1.322 1l5 5-5 5"
								stroke="#D87D4A"
								strokeWidth="2"
								fill="none"
								fillRule="evenodd"
							/>
						</svg>
					</span>
				</Link>
			</li>
			<li>
				<Link
					to="/speakers"
					onClick={props.handleClick}
					aria-label="Got to speakers page">
					<img src={speakers} alt="" />
					<div className="h6">Speakers</div>
					<span>
						Shop
						<svg
							width="8"
							height="12"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1.322 1l5 5-5 5"
								stroke="#D87D4A"
								strokeWidth="2"
								fill="none"
								fillRule="evenodd"
							/>
						</svg>
					</span>
				</Link>
			</li>
			<li>
				<Link
					to="/earphones"
					onClick={props.handleClick}
					aria-label="Got to earphone page">
					<img src={earphones} alt="" />
					<div className="h6">Earphones</div>
					<span>
						Shop
						<svg
							width="8"
							height="12"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1.322 1l5 5-5 5"
								stroke="#D87D4A"
								strokeWidth="2"
								fill="none"
								fillRule="evenodd"
							/>
						</svg>
					</span>
				</Link>
			</li>
		</ul>
	);
};

export default SectionLinks;
