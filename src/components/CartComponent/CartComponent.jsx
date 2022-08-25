import React, {useMemo, useState} from 'react';
import s from "./CartComponent.module.scss";
import {useDispatch, useSelector} from "react-redux";
import CartElement from "./CartElement/CartElement";
import {removeAllAction} from "../../store/CartReducer";

const CartComponent = () => {
    const [wasBought, setWasBought] = useState(false);

    const dispatch = useDispatch();

    const goods = useSelector(state => {
        return state.cart.goods;
    });

    const summ = useMemo(() => {
        return goods.reduce((summ, goodObj) => {
            return summ + (goodObj.count * goodObj.good.price);
        }, 0);
    }, [goods]);

    function makeBuy() {
        dispatch(removeAllAction());
        setWasBought(true);
    }

    return (
        <div className={s.cart}>
            {wasBought ? <p className={s.empty}>Спасибо за заказ!!!</p> :
            <>
                { goods.length ?
                    goods.map(goodObj => <CartElement count={goodObj.count} key={goodObj.good.id} data={goodObj.good} />) :
                    <p className={s.empty}>Корзина пуста</p>
                }
                {goods.length ?
                    <div className={s.cart_footer}>
                        <div className={s.btn}>
                            <button onClick={() => makeBuy()}>Заказать</button>
                        </div>
                        <p className={s.result}>Итого: {summ} ₽</p>
                    </div> : ""}
            </>}
        </div>
    );
};

export default CartComponent;