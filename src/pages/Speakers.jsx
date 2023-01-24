import { productsArray } from '../assets/data';
import { Link } from 'react-router-dom';

import AboutBlock from '../components/AboutBlock/AboutBlock';
import SectionLinks from '../components/SectionLinks/SectionLinks';

const Speakers = () => {
	const speakers = productsArray.map((speaker, idx) => {
		if (speaker.category.includes('speakers')) {
			let newProduct;
			if (speaker.new === true) {
				newProduct = 'New Thing!';
			}
			return (
				<div key={idx}>
					{newProduct && (
						<div className="card__badge">{newProduct}</div>
					)}
					<h1>{speaker.name}</h1>
					<p>{speaker.description}</p>
					<Link to={'/products/' + speaker.id}>{speaker.name}</Link>
				</div>
			);
		}
	});

	console.log(speakers);

	return (
		<main>
			<div className="page-head">
				<div className="content">
					<h1>Speakers</h1>
				</div>
			</div>
			<div className="content body-flow">
				<div>{speakers}</div>
				<SectionLinks />
				<AboutBlock />
			</div>
		</main>
	);
};

export default Speakers;
