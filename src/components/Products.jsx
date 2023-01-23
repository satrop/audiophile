import React from 'react';
import productsData from '../assets/data';
import { Link } from 'react-router-dom';

const Products = () => {
	const products = productsData.map((product) => {
		let newProduct;
		if (product.new === true) {
			newProduct = 'New Thing!';
		}

		return (
			<div key={product.id}>
				<h3>
					<Link to={`/products/${product.id}`}>{product.name}</Link>
				</h3>
				{newProduct && <div className="badge">{newProduct}</div>}
				<p>Price: ${product.price}</p>
				<hr />
			</div>
		);
	});

	return (
		<>
			<h1>Products Page</h1>
			{products}
		</>
	);
};

export default Products;
