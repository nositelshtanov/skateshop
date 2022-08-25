import React from 'react';
import s from "./BuyItem.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {addGoodsAction, changeCountAction} from "../../../../store/CartReducer";

const BuyItem = ({good}) => {
    const dispatch = useDispatch();

    const onClickHandler = useSelector(state => {
        const goodInCart = state.cart.goods.filter(product => product.good.id == good.id);

        if (goodInCart.length) {
            return () => {
                dispatch(changeCountAction(good.id, goodInCart[0].count + 1));
            };
        }

        return () => {
            dispatch(addGoodsAction(good));
        };
    });

    return (
        <button
            onClick={onClickHandler}
            className={s.buyBtn}
        >В корзину</button>
    );
};

export default BuyItem;