import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import { addToCart, changeMessage } from './../actions/index';

class ProductsContainers extends Component {

    render() {
        var { products } = this.props;
        return (
            <Products >
                { this.showProducts(products) }
            </Products>
        );
    };

    showProducts(products){
        var { onAddToCart, onChangeMessage } = this.props;
        var result = null;
        if( products.length > 0 ){
            result = products.map( (product, index) => {
                return <Product key={ index } product={ product } onAddToCart={ onAddToCart } onChangeMessage={ onChangeMessage }/>
            }); 
        }
        return result;
    }
}

ProductsContainers.propTypes ={
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
        })
    ).isRequired
}   

var mapStateToProps = (state) => {
    return {
        products : state.products,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart : (product) => {
            dispatch(addToCart(product, 1));
        },
        onChangeMessage : (message) => {
            dispatch(changeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainers);
