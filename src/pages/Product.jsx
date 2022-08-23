import React from 'react';
import {useParams} from "react-router-dom";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import {useSelector} from "react-redux";

const Product = () => {
    const {id} = useParams();

    const productData = useSelector(state => {
        const arr = state.products.products.filter(product => product.id == id);

        if (!arr.length) return null;

        return arr[0];
    });

    return (
        <>
            <ProductDetail data={productData} />
            {/*кнопка назад*/}
        </>
    );
};

export default Product;