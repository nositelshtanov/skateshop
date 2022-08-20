import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import BrandsService from "../services/brands";
import Goods from "../services/goods";
import ProductsList from "../components/ProductsList/ProductsList";
import {useSelector} from "react-redux";

const Brand = () => {
    const {id} = useParams();

    const brandData = useSelector((state) => {
        return state.brands.brands.filter((brand) => brand.id == id)[0];
    });

    const brandGoods = useSelector((state) => {
        return state.products.products.filter(product => product.brandId == id);
    });

    return (
        <div>
            {!brandData ?
                <h1>Загрузка</h1> :
                <>
                    <div>
                        <h1 style={{margin: "20px 0", fontSize: "2rem", textAlign: "center"}}>{brandData.name}</h1>
                        <img style={{maxWidth: "100%", margin: "50px auto"}} src={brandData.detail} alt={brandData.name} />
                    </div>
                    <ProductsList products={brandGoods} showBrandSelect={false}/>
                </>
            }
        </div>
    );
};

export default Brand;