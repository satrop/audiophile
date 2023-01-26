import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionLinks from '../components/SectionLinks/SectionLinks';
import AboutBlock from '../components/AboutBlock/AboutBlock';

import Prod1LgImg from '/assets/home/desktop/image-speaker-zx9.png';
import Prod1MdImg from '/assets/home/tablet/image-speaker-zx9.png';
import Prod1SmImg from '/assets/home/mobile/image-speaker-zx9.png';

import Prod2LgImg from '/assets/home/desktop/image-earphones-yx1.jpg';
import Prod2MdImg from '/assets/home/tablet/image-earphones-yx1.jpg';
import Prod2SmImg from '/assets/home/mobile/image-earphones-yx1.jpg';

import '../SASS/main.scss';
import '../SASS/Pages/home.scss';

const Home = () => {
	useEffect(() => {
		document.body.classList.add('home');
		return () => {
			document.body.classList.remove('home');
		};
	}, []);

	return (
		<main className="flow">
			<div className="hero">
				<div className="content">
					<div className="inner-content">
						<div className="overline">New product</div>
						<h1>XX99 Mark II HeadphoneS</h1>
						<p>
							Experience natural, lifelike audio and exceptional
							build quality made for the passionate music
							enthusiast.
						</p>
						<Link className="button" to="/products/4">
							See product
						</Link>
					</div>
				</div>
			</div>
			<div className="content flow">
				<SectionLinks />
				<section className="home-products-cards flow">
					<div className="home-product-card home-product-card--orange">
						<picture>
							<source
								srcSet={Prod1LgImg}
								media="(min-width:  90rem)"
							/>
							<source
								srcSet={Prod1MdImg}
								media="(min-width:  48rem)"
							/>
							<img
								className="border-radius"
								src={Prod1SmImg}
								alt="ZX9 SPEAKER"
							/>
						</picture>
						<div className="text-block">
							<div className="h1">ZX9 SPEAKER</div>
							<p>
								Upgrade to premium speakers that are
								phenomenally built to deliver truly remarkable
								sound.
							</p>
							<Link className="button black" to="/products/6">
								See product
							</Link>
						</div>
					</div>
					<div className="home-product-card home-product-card--two">
						<div className="text-block">
							<div className="h1">ZX7 SPEAKER</div>
							<Link className="button outline" to="/products/5">
								See product
							</Link>
						</div>
					</div>
					<div className="product-card-wrap">
						<div className="block text">
							<div className="h1">YX1 EARPHONES</div>
							<Link className="button outline" to="/products/1">
								See product
							</Link>
						</div>
						<div className="block image">
							<picture>
								<source
									srcSet={Prod2LgImg}
									media="(min-width:  90rem)"
								/>
								<source
									srcSet={Prod2MdImg}
									media="(min-width:  48rem)"
								/>
								<img
									className="border-radius"
									src={Prod2SmImg}
									alt="YX1 EARPHONES"
								/>
							</picture>
						</div>
					</div>
				</section>
				<AboutBlock />
			</div>
		</main>
	);
};

export default Home;
