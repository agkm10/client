import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./inputTile.css";


export function InputTile( { } ) {
	// const products = featuredProducts.map( product => (
	// 	<FeaturedProduct
	// 		addToCart={ () => addToCart( product.id ) }
	// 		description={ product.description }
	// 		key={ product.id }
	// 		logo={ product.logo }
	// 		name={ product.name }
	// 		onSale={ product.onSale }
	// 		price={ product.price }
	// 	/>
	// ) );

	return (
		<main className="input-tile-landing">
			<h1>Component 1</h1>
			<h1>Component 2</h1>
			<h1>Component 3</h1>
			<h1>Component 4</h1>
			<h1>Component 5</h1>
			<h1>Component 6</h1>
			{/* <h1>Featured Products</h1>
			<div className="landing__products-wrapper">
				{ products }
			</div>

			<Link to="/shop"><h1 className="landing__full-shop-link">Take me to the full shop!</h1></Link> */}
		</main>
	);
}

// function mapStateToProps( {  } ) {
// 	return {  };
// }
//
// export default connect( mapStateToProps)( InputTile );
export default InputTile;
