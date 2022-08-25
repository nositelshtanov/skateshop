import React from 'react';
import s from "./ProductItem.module.scss";
import {Link} from "react-router-dom";
import BuyItem from "./BuyItem/BuyItem";

const ProductItem = ({data}) => {
    return (
        <div className={s.product}>
            <Link to={`/catalog/${data.id}`}>
                <img src={data.images[0]} alt=""/>
            </Link>
            <div className={s.product__info}>
                <p><span className={s.brand}>{data.brandName}</span></p>
                <p><Link to={`/catalog/${data.id}`} className={s.name}>{data.name}</Link></p>
                <p><span className={s.price}>{data.price}</span> ₽</p>
                <BuyItem good={data} />
            </div>
            {data.new &&
                <div className={s.new}>new</div>}
        </div>
    );
};

export default ProductItem;