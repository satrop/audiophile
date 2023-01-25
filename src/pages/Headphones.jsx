import { productsArray } from '../assets/data';
import { Link } from 'react-router-dom';

import AboutBlock from '../components/AboutBlock/AboutBlock';
import SectionLinks from '../components/SectionLinks/SectionLinks';

import '../SASS/elements/product-card.scss';

const Headphones = () => {
	function buildProductList(products, category) {
		const filteredProducts = products.filter(
			(item) => item.category.toLowerCase() == category.toLowerCase()
		);

		const isNew = filteredProducts.filter((item) => item.new);
		const notNew = filteredProducts.filter((item) => !item.new);

		return [...isNew, ...notNew];
	}

	const filterHeadphones = buildProductList(productsArray, 'headphones').map(
		(headphone, idx) => {
			let newProduct;
			if (headphone.new === true) {
				newProduct = 'New product';
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
							<div className="overline">{newProduct}</div>
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
	);

	return (
		<main>
			<div className="page-head">
				<div className="content">
					<h1>Headphones</h1>
				</div>
			</div>
			<div className="content flow">
				<div>{filterHeadphones}</div>
				<SectionLinks />
				<AboutBlock />
			</div>
		</main>
	);
};

export default Headphones;
