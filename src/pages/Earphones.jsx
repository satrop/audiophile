import { productsArray } from '../assets/data';
import { Link } from 'react-router-dom';

import MiniCheckOutProduct from '../components/MiniCheckOutProduct';
import AboutBlock from '../components/AboutBlock/AboutBlock';
import SectionLinks from '../components/SectionLinks/SectionLinks';

const Earphones = () => {
	const filterEarphones = productsArray.map((earphone, idx) => {
		if (earphone.category.includes('earphones')) {
			let newProduct;
			if (earphone.new === true) {
				newProduct = 'New Thing!';
			}

			return (
				<div key={idx}>
					{newProduct && (
						<div className="card__badge">{newProduct}</div>
					)}
					<h1>{earphone.name}</h1>
					<p>{earphone.description}</p>
					<Link to={'/products/' + earphone.id}>{earphone.name}</Link>
				</div>
			);
		}
	});

	console.log(filterEarphones);

	return (
		<main>
			<div className="content body-flow">
				<div>
					<MiniCheckOutProduct />
				</div>
				<div>{filterEarphones}</div>
				<SectionLinks />
				<AboutBlock />
			</div>
		</main>
	);
};

export default Earphones;
