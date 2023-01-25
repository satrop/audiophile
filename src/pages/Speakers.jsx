import { productsArray } from '../assets/data';
import { Link } from 'react-router-dom';

import AboutBlock from '../components/AboutBlock/AboutBlock';
import SectionLinks from '../components/SectionLinks/SectionLinks';

import '../SASS/elements/product-card.scss';

const Speakers = () => {
	function buildProductList(products, category) {
		const filteredProducts = products.filter(
			(item) => item.category.toLowerCase() == category.toLowerCase()
		);

		const isNew = filteredProducts.filter((item) => item.new);
		const notNew = filteredProducts.filter((item) => !item.new);

		return [...isNew, ...notNew];
	}

	const filteredSpeakers = buildProductList(productsArray, 'speakers').map(
		(speaker, idx) => {
			let newProduct;
			if (speaker.new === true) {
				newProduct = 'New product';
			}

			const smImg = speaker.categoryImage.mobile;
			const mdImg = speaker.categoryImage.tablet;
			const lgImg = speaker.categoryImage.desktop;

			return (
				<div className="product-card" key={idx}>
					<picture>
						<source srcSet={lgImg} media="(min-width:  90rem)" />
						<source srcSet={mdImg} media="(min-width:  48rem)" />
						<img
							className="border-radius"
							src={smImg}
							alt={speaker.name}
						/>
					</picture>
					<div className="col">
						{newProduct && (
							<div className="overline">{newProduct}</div>
						)}
						<h1>{speaker.name}</h1>
						<p>{speaker.description}</p>
						<Link className="button" to={'/products/' + speaker.id}>
							{speaker.name}
						</Link>
					</div>
				</div>
			);
		}
	);

	return (
		<main>
			<div className="page-head">
				<div className="content">
					<h1>Speakers</h1>
				</div>
			</div>
			<div className="content body-flow">
				<div>{filteredSpeakers}</div>
				<SectionLinks />
				<AboutBlock />
			</div>
		</main>
	);
};

export default Speakers;
