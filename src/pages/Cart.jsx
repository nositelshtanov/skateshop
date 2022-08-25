import React from 'react';
import H1 from "../components/UI/H1/H1";
import CartComponent from "../components/CartComponent/CartComponent";

const Cart = () => {
    return (
        <>
            <H1 text={"Корзина"} />
            <CartComponent />
        </>
    );
};

export default Cart;