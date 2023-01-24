import { productsArray } from '../assets/data';
import { Link } from 'react-router-dom';

import AboutBlock from '../components/AboutBlock/AboutBlock';
import SectionLinks from '../components/SectionLinks/SectionLinks';

const Speakers = () => {
	const filteredSpeakers = productsArray.map((speaker, idx) => {
		if (speaker.category.includes('speakers')) {
			let newProduct;
			if (speaker.new === true) {
				newProduct = 'New Thing!';
			}

			const smImg = speaker.categoryImage.mobile;
			const mdImg = speaker.categoryImage.tablet;
			const lgImg = speaker.categoryImage.desktop;

			return (
				<div key={idx}>
					<picture>
						<source srcSet={lgImg} media="(min-width:  90rem)" />
						<source srcSet={mdImg} media="(min-width:  48rem)" />
						<img
							className="border-radius"
							src={smImg}
							alt={speaker.name}
						/>
					</picture>
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
