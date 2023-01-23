import React from 'react';

import { CartContext } from '../CardContext';
import { useContext } from 'react';

import { useParams } from 'react-router-dom';
import { productsArray } from '../assets/data';

function ProductDetail() {
	const { productId } = useParams();
	const thisProduct = productsArray.find((prod) => prod.id === productId);

	const cart = useContext(CartContext);
	const productQuantity = cart.getProductQuantity(thisProduct.id);

	const thisProductIncludes = thisProduct.includes.map((includes, idx) => {
		return (
			<li key={idx}>
				{includes.quantity}x{includes.item}
			</li>
		);
	});

	let newProduct;
	if (thisProduct.new === true) {
		newProduct = 'New Thing!';
	}

	return (
		<div>
			<h1>Product Detail</h1>
			<hr />
			<h2>
				{newProduct && <div className="card__badge">{newProduct}</div>}
			</h2>
			<h1>{thisProduct.name}</h1>
			<p>Price: ${thisProduct.price}</p>
			<p>{thisProduct.description}</p>
			<p>{thisProduct.features}</p>
			<ul>{thisProductIncludes}</ul>

			{productQuantity > 0 ? (
				<>
					<div>In Cart: {productQuantity}</div>
					<button onClick={() => cart.addOneToCart(thisProduct.id)}>
						+
					</button>
					<button
						onClick={() => cart.removeOneFromCart(thisProduct.id)}>
						-
					</button>
					<button onClick={() => cart.deleteFromCart(thisProduct.id)}>
						Remove From Cart
					</button>
				</>
			) : (
				<button onClick={() => cart.addOneToCart(thisProduct.id)}>
					Add to cart
				</button>
			)}
		</div>
	);
}

export default ProductDetail;
