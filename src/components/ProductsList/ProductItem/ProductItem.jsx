import React from 'react';
import s from "./ProductItem.module.scss";

const ProductItem = ({data}) => {


    return (
        <div className={s.product}>
            <img src={data.images[0]} alt=""/>
            <p style={{padding: 8}}>{data.name}</p>
        </div>
    );
};

export default ProductItem;