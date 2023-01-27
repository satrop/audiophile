import lg from '/assets/other/desktop/image-best-gear.jpg';
import md from '/assets/other/tablet/image-best-gear.jpg';
import sm from '/assets/other/mobile/image-best-gear.jpg';

import './AboutBlocks.scss';

const AboutBlock = () => {
	return (
		<section className="about-block ">
			<div className="about-block__text">
				<div className="header h2">
					Bringing you the <span>best</span> audio gear
				</div>
				<p>
					Located at the heart of New York City, Audiophile is the
					premier store for high end headphones, earphones, speakers,
					and audio accessories. We have a large showroom and luxury
					demonstration rooms available for you to browse and
					experience a wide range of our products. Stop by our store
					to meet some of the fantastic people who make Audiophile the
					best place to buy your portable audio equipment.
				</p>
			</div>
			<div className="about-block__image">
				<picture>
					<source srcSet={lg} media="(min-width:  90rem)" />
					<source srcSet={md} media="(min-width:  48rem)" />
					<img className="border-radius" src={sm} alt="Beast gear" />
				</picture>
			</div>
		</section>
	);
};

export default AboutBlock;
