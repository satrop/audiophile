import React from 'react';
import Gallery from '../components/Gallery/Gallery';
import AboutBlock from '../components/AboutBlock/AboutBlock';
import SectionLinks from '../components/SectionLinks/SectionLinks';

import { CartContext } from '../CardContext';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productsArray } from '../assets/data';

import GoBack from '../components/GoBack';

import '../SASS/elements/product-details.scss';

function ProductDetail() {
	const { productId } = useParams();
	const thisProduct = productsArray.find((prod) => prod.id === productId);
	const cart = useContext(CartContext);
	const productQuantity = cart.getProductQuantity(thisProduct.id);
	const thisProductIncludes = thisProduct.includes.map((includes, idx) => {
		return (
			<li key={idx}>
				<span>{includes.quantity}x</span>
				<span>{includes.item}</span>
			</li>
		);
	});

	let newProduct;
	if (thisProduct.new === true) {
		newProduct = 'New product';
	}

	const youMightLink = thisProduct.others.map((others, idx) => {
		const youMayLikeSmImg = others.image.mobile;
		const youMayLikeMdImg = others.image.tablet;
		const youMayLikeLgImg = others.image.desktop;
		const youMightLike = others.slug;
		return (
			<li key={idx}>
				<picture className="gallery-img gallery-img--1">
					<source
						srcSet={youMayLikeLgImg}
						media="(min-width:  90rem)"
					/>
					<source
						srcSet={youMayLikeMdImg}
						media="(min-width:  48rem)"
					/>
					<img
						className="border-radius"
						src={youMayLikeSmImg}
						alt={others.name}
					/>
				</picture>
				<div className="h3">{others.name}</div>
				<Link className="button" to={`/products/${youMightLike}`}>
					See product
				</Link>
			</li>
		);
	});

	const smImg = thisProduct.image.mobile;
	const mdImg = thisProduct.image.tablet;
	const lgImg = thisProduct.image.desktop;

	const productGallery = thisProduct.gallery;

	const prod1SmImg = productGallery.first.mobile;
	const prod1MdImg = productGallery.first.tablet;
	const prod1LgImg = productGallery.first.desktop;

	const prod2SmImg = productGallery.second.mobile;
	const prod2MdImg = productGallery.second.tablet;
	const prod2LgImg = productGallery.second.desktop;

	const prod3SmImg = productGallery.third.mobile;
	const prod3MdImg = productGallery.third.tablet;
	const prod3LgImg = productGallery.third.desktop;

	return (
		<main>
			<GoBack />
			<div className="product-detail content flow">
				<div className="product-info--main">
					<picture>
						<source srcSet={lgImg} media="(min-width:  90rem)" />
						<source srcSet={mdImg} media="(min-width:  48rem)" />
						<img
							className="border-radius"
							src={smImg}
							alt={thisProduct.name}
						/>
					</picture>
					<div className="col flow">
						{newProduct && (
							<div className="overline">{newProduct}</div>
						)}

						<h1>{thisProduct.name}</h1>
						<p>{thisProduct.description}</p>
						<p className="price h6">${thisProduct.price}</p>
						<div className="product-controls">
							<div className="button-group">
								<button
									className="control"
									onClick={() =>
										cart.removeOneFromCart(thisProduct.id)
									}>
									-
								</button>
								<div className="quantity">
									{productQuantity}
								</div>
								<button
									className="control"
									onClick={() =>
										cart.addOneToCart(thisProduct.id)
									}>
									+
								</button>
							</div>
							<button
								className="button add-to-cart"
								onClick={() =>
									cart.addOneToCart(thisProduct.id)
								}>
								Add to cart
							</button>
						</div>
					</div>
				</div>
				<div className="product-info grid">
					<div className="product-info--feature">
						<div className="h3">Features</div>
						<p className="with-breaks">{thisProduct.features}</p>
					</div>
					<div className="product-info--box">
						<div className="h3">In the box</div>
						<ul>{thisProductIncludes}</ul>
					</div>
				</div>
				<Gallery
					prod1LgImg={prod1LgImg}
					prod1MdImg={prod1MdImg}
					prod1SmImg={prod1SmImg}
					name1={thisProduct.name}
					prod2LgImg={prod2LgImg}
					prod2MdImg={prod2MdImg}
					prod2SmImg={prod2SmImg}
					name2={thisProduct.name}
					prod3LgImg={prod3LgImg}
					prod3MdImg={prod3MdImg}
					prod3SmImg={prod3SmImg}
					name3={thisProduct.name}
				/>
				<section className="you-may-also-like">
					<h3>You May Also Like</h3>
					<ul>{youMightLink}</ul>
				</section>
				<SectionLinks />
				<AboutBlock />
			</div>
		</main>
	);
}

export default ProductDetail;
