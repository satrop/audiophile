import { productsArray } from '../assets/data';
import { Link } from 'react-router-dom';

import AboutBlock from '../components/AboutBlock/AboutBlock';
import SectionLinks from '../components/SectionLinks/SectionLinks';

const Headphones = () => {
	const filterHeadphones = productsArray.map((headphone, idx) => {
		if (headphone.category.includes('headphones')) {
			let newProduct;
			if (headphone.new === true) {
				newProduct = 'New Thing!';
			}

			return (
				<div key={idx}>
					{newProduct && (
						<div className="card__badge">{newProduct}</div>
					)}
					<h1>{headphone.name}</h1>
					<p>{headphone.description}</p>
					<Link to={'/products/' + headphone.id}>
						{headphone.name}
					</Link>
				</div>
			);
		}
	});

	console.log(filterHeadphones);

	return (
		<main>
			<div className="content body-flow">
				<h1>Headphones</h1>

				<div>{filterHeadphones}</div>
				<SectionLinks />
				<AboutBlock />
			</div>
		</main>
	);
};

export default Headphones;
