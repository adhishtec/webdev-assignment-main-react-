import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../actions/products';
import { ProductCard } from './common/productCard';
import './ShoppingList.css';

const ShoppingList = () => {
	const dispatch = useDispatch();

	// initialize states
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [searchText, setSearchText] = useState('');

	// Get data from state
	const { data, error, loading } = useSelector((state) => state.products);

	const getAllProducts = useCallback(() => {
		dispatch(getProducts());
	}, [dispatch]);

	useEffect(() => {
		getAllProducts();
	}, [getAllProducts]);

	useEffect(() => {
		setProducts(data);
	}, [data, getAllProducts]);

	// Get categories based on product list rendered on screen
	const getCategories = useCallback((productList) => {
		const allCategories = productList.map((oneElement) => oneElement.category);
		return [...new Set(allCategories)];
	}, []);

	useEffect(() => {
		const categoriesList = getCategories(data);
		setCategories(categoriesList);
	}, [getCategories, data]);

	// Hnadler for change in filter checkbox
	const handleFilterChangeClick = (e) => {
		if (e.target.checked) {
			const newProducts = data.filter(
				(element) => e.target.defaultValue === element.category
			);
			setProducts([...products, ...newProducts]);
		} else {
			const newProducts = products.filter(
				(element) => e.target.defaultValue !== element.category
			);
			setProducts([...newProducts]);
		}
	};

	// Hnadler for change in search text
	const handleTextChangeClick = (e) => {
		setSearchText(e.target.value);
		const res = data.filter((obj) =>
			JSON.stringify(obj).toLowerCase().includes(searchText.toLowerCase())
		);
		setProducts(res);
	};

	// Summary on selection
	const headingSummary = () => {
		return (
			<p>
				Showing {products.length} results in categories{' '}
				<strong>{getCategories(products).join(', ')}</strong>
			</p>
		);
	};

	return (
		<>
			<div className="products-container">
				<h2>Products</h2>
				<div className="heading__search">
					<label htmlFor="text">
						<input
							type="text"
							placeholder="Search products..."
							value={searchText}
							onChange={handleTextChangeClick}
						/>
					</label>
				</div>
				<div className="heading__category">
					{categories.length &&
						categories.map((n) => {
							return (
								<label htmlFor={n} key={n}>
									<input
										type="checkbox"
										value={n}
										defaultChecked={true}
										onChange={handleFilterChangeClick}
									/>
									{n}
								</label>
							);
						})}
				</div>
				<div className="heading__summary">
					{products.length && categories.length ? (
						headingSummary()
					) : (
						<p>No product selected</p>
					)}
				</div>
			</div>

			<div className="products-container">
				{!error && !loading && products.length ? (
					<>
						<div className="scrollable-container">
							{products.map((product) => {
								return (
									<ProductCard
										key={product.id}
										src={product.image}
										title={product.title}
										category={product.category}
										price={product.price}
										description={product.description}
									/>
								);
							})}
						</div>
					</>
				) : (
					<div className="scrollable-container"> No product selected</div>
				)}
				{error && !loading && (
					<div className="products__error">
						Oops!! Something went wrong. Please try after sometime.
					</div>
				)}
				{loading && !products.length && <div className="loader"></div>}
			</div>
		</>
	);
};

export default ShoppingList;
