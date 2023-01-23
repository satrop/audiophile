import React from 'react';
// import productsData from './productsData';
import { Link } from 'react-router-dom';
import { productsArray } from '../assets/data';
import ProductCard from '../components/ProductCard';

const Products = () => {
	const products = productsArray.map((product, idx) => (
		<div className="card" key={idx}>
			<ProductCard product={product} />
		</div>
	));

	return (
		<>
			<h1>Products Page</h1>
			{products}
		</>
	);
};

export default Products;
