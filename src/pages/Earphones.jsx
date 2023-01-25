import { productsArray } from '../assets/data';
import { Link } from 'react-router-dom';

import AboutBlock from '../components/AboutBlock/AboutBlock';
import SectionLinks from '../components/SectionLinks/SectionLinks';

import '../SASS/elements/product-card.scss';

const Earphones = () => {
	function buildProductList(products, category) {
		const filteredProducts = products.filter(
			(item) => item.category.toLowerCase() == category.toLowerCase()
		);

		const isNew = filteredProducts.filter((item) => item.new);
		const notNew = filteredProducts.filter((item) => !item.new);

		return [...isNew, ...notNew];
	}

	const filterEarphones = buildProductList(productsArray, 'earphones').map(
		(earphone, idx) => {
			let newProduct;
			if (earphone.new === true) {
				newProduct = 'New product';
			}

			const smImg = earphone.categoryImage.mobile;
			const mdImg = earphone.categoryImage.tablet;
			const lgImg = earphone.categoryImage.desktop;

			return (
				<div className="product-card" key={idx}>
					<picture>
						<source srcSet={lgImg} media="(min-width:  90rem)" />
						<source srcSet={mdImg} media="(min-width:  48rem)" />
						<img
							className="border-radius"
							src={smImg}
							alt={earphone.name}
						/>
					</picture>
					<div className="col">
						{newProduct && (
							<div className="overline">{newProduct}</div>
						)}
						<h1>{earphone.name}</h1>
						<p>{earphone.description}</p>
						<Link
							className="button"
							to={'/products/' + earphone.id}>
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
					<h1>Earphones</h1>
				</div>
			</div>
			<div className="content body-flow">
				<div>{filterEarphones}</div>
				<SectionLinks />
				<AboutBlock />
			</div>
		</main>
	);
};

export default Earphones;
