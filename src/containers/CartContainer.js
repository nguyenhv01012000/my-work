import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as Message from './../constants/Message';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import { changeMessage, removeProduct, updateProduct } from './../actions/index';

class CartContainers extends Component {

    render() {
        var { cart } = this.props;
        return (
            <Cart>
                { this.showCartItem(cart)}
                { this.showTotalAmount(cart)}
            </Cart>
        );
    };

    showCartItem = (cart) => {
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem key={index} item={item} index={index} onDeleteInCart={this.props.onDeleteInCart} onChangeMessage={this.props.onChangeMessage} onUpdateInCart={this.props.onUpdateInCart}/>
                )
            });
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}


var mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteInCart: (product) => {
            dispatch(removeProduct(product))
        },
        onChangeMessage: (message) => {
            dispatch(changeMessage(message));
        },
        onUpdateInCart: (product, quantity) => {
            dispatch(updateProduct(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainers);
