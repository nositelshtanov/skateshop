import React, {useMemo} from 'react';
import s from "./CartComponent.module.scss";
import {useSelector} from "react-redux";
import CartElement from "./CartElement/CartElement";

const CartComponent = () => {
    const goods = useSelector(state => {
        return state.cart.goods;
    });

    const summ = useMemo(() => {
        return goods.reduce((summ, goodObj) => {
            return summ + (goodObj.count * goodObj.good.price);
        }, 0);
    }, [goods]);
    
    return (
        <div className={s.cart}>
            { goods.length ?
                goods.map(goodObj => <CartElement count={goodObj.count} key={goodObj.good.id} data={goodObj.good} />) :
                <p className={s.empty}>Корзина пуста</p>
            }
            {goods.length ? <p className={s.result}>Итого: {summ} ₽</p> : ""}
        </div>
    );
};

export default CartComponent;