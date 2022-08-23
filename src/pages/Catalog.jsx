import React from 'react';
import ProductsList from "../components/ProductsList/ProductsList";
import {useSelector} from "react-redux";
import H1 from "../components/UI/H1/H1";

const Catalog = () => {
    const allProducts = useSelector(state => state.products.products);

    return (
        <>
            <H1 text={"Каталог"}/>
            <ProductsList products={allProducts} rowCountOnPage={3}/>
        </>
    );
};

export default Catalog;