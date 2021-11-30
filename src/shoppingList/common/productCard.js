import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

export const ProductCard = ({
	src,
	caption,
	title,
	category,
	price,
	description,
}) => {
	return (
		<article className="product-card">
			<div className="product__header">
				<div className="product__title">{title}</div>
				<div className="product__category">{category}</div>
			</div>
			<img className="product__img" src={src} alt={caption}></img>
			<div className="product__description">
				<p>{description}</p>
			</div>
			<footer>${price}</footer>
		</article>
	);
};

ProductCard.propTypes = {
	src: PropTypes.string.isRequired,
	caption: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};
