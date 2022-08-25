import React from 'react';
import s from "./buyBtn.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {addGoodsAction, addGoodWithCountAction, changeCountAction} from "../../../store/CartReducer";

const BuyBtn = ({good, addCount}) => {
    const dispatch = useDispatch();

    const onClickHandler = useSelector(state => {
        const goodInCart = state.cart.goods.filter(product => good.id == product.good.id);

        if (goodInCart.length) {
            return () => {
                dispatch(changeCountAction(good.id, goodInCart[0].count + addCount));
            };
        }
        return () => {
            dispatch(addGoodWithCountAction(good, addCount));
        };
    });

    return (
        <button
            className={s.buy}
            onClick={onClickHandler}
        >в корзину</button>
    );
};

export default BuyBtn;