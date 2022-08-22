import React from 'react';
import s from "./ProductItem.module.scss";
import {Link} from "react-router-dom";

const ProductItem = ({data}) => {
    console.log(data);

    return (
        <div className={s.product}>
            <Link to={""}>
                <img src={data.images[0]} alt=""/>
            </Link>
            <div className={s.product__info}>
                <p><span className={s.brand}>{data.brandName}</span></p>
                <p><Link to={""} className={s.name}>{data.name}</Link></p>
                <p><span className={s.price}>{data.price}</span> ₽</p>
                <button className={s.buyBtn}>В корзину</button>
            </div>
        </div>
    );
};

export default ProductItem;