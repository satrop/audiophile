import React from 'react';

const Gallery = (props) => {
	return (
		<section className="gallery">
			<div className="gallery-wrapper">
				<picture className="gallery-img gallery-img--1">
					<source
						srcSet={props.prod1LgImg}
						media="(min-width:  90rem)"
					/>
					<source
						srcSet={props.prod1MdImg}
						media="(min-width:  48rem)"
					/>
					<img
						className="border-radius"
						src={props.prod1SmImg}
						alt={props.name1}
					/>
				</picture>
				<picture className="gallery-img gallery-img--2">
					<source
						srcSet={props.prod2LgImg}
						media="(min-width:  90rem)"
					/>
					<source
						srcSet={props.prod2MdImg}
						media="(min-width:  48rem)"
					/>
					<img
						className="border-radius"
						src={props.prod2SmImg}
						alt={props.name2}
					/>
				</picture>
				<picture className="gallery-img gallery-img--3">
					<source
						srcSet={props.prod3LgImg}
						media="(min-width:  90rem)"
					/>
					<source
						srcSet={props.prod3MdImg}
						media="(min-width:  48rem)"
					/>
					<img
						className="border-radius"
						src={props.prod3SmImg}
						alt={props.name3}
					/>
				</picture>
			</div>
		</section>
	);
};

export default Gallery;
