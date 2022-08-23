import React from 'react';
import HomeSlider from "../components/HomeSlider/HomeSlider";
import {useSelector} from "react-redux";
import ProductsList from "../components/ProductsList/ProductsList";
import H1 from "../components/UI/H1/H1";

const Main = () => {
    const newGoods = useSelector(state => {
        return state.products.products.filter(product => product.new);
    });

    return (
        <>
            <HomeSlider />
            <H1 text={"Новинки"}/>
            <ProductsList products={newGoods} showPagination={false}/>
        </>
    );
};

export default Main;