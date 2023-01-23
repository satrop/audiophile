import { productsArray } from '../assets/data';

import MiniCheckOutProduct from '../components/MiniCheckOutProduct';
import ProductCard from '../components/ProductCard';
import AboutBlock from '../components/AboutBlock/AboutBlock';
import SectionLinks from '../components/SectionLinks/SectionLinks';


const Headphones = () => {
	const products = productsArray.map((product, idx) => (
		<div className="card" key={idx}>
			<ProductCard product={product} />
		</div>
	));

	return (
		<main>
			<div className="content body-flow">
				<div><MiniCheckOutProduct /></div>



				{products}
				<SectionLinks />
				<AboutBlock />
			</div>
		</main>
	);
};

export default Headphones;
