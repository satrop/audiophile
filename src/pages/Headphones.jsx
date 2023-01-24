import { productsArray } from '../assets/data';
import { Link } from 'react-router-dom';

import AboutBlock from '../components/AboutBlock/AboutBlock';
import SectionLinks from '../components/SectionLinks/SectionLinks';

import '../SASS/elements/product-card.scss';

const Headphones = () => {
	const filterHeadphones = productsArray.map((headphone, idx) => {
		if (headphone.category.includes('headphones')) {
			let newProduct;
			if (headphone.new === true) {
				newProduct = 'New Thing!';
			}

			const smImg = headphone.categoryImage.mobile;
			const mdImg = headphone.categoryImage.tablet;
			const lgImg = headphone.categoryImage.desktop;

			return (
				<div className="product-card" key={idx}>
					<picture>
						<source srcSet={lgImg} media="(min-width:  90rem)" />
						<source srcSet={mdImg} media="(min-width:  48rem)" />
						<img
							className="border-radius"
							src={smImg}
							alt={headphone.name}
						/>
					</picture>
					<div className="col">
						{newProduct && (
							<div className="card__badge">{newProduct}</div>
						)}
						<h1>{headphone.name}</h1>
						<p>{headphone.description}</p>
						<Link
							className="button"
							to={'/products/' + headphone.id}>
							See Product
						</Link>
					</div>
				</div>
			);
		}
	});

	return (
		<main>
			<div className="page-head">
				<div className="content">
					<h1>Headphones</h1>
				</div>
			</div>
			<div className="content body-flow">
				<div>{filterHeadphones}</div>
				<SectionLinks />
				<AboutBlock />
			</div>
		</main>
	);
};

export default Headphones;
