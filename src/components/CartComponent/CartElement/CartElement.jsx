import React, {useEffect, useMemo, useState} from 'react';
import s from "./CartElement.module.scss";
import Counter from "../../UI/Counter/Counter";
import {useDispatch} from "react-redux";
import {changeCountAction, removeOneAction} from "../../../store/CartReducer";
import {Link} from "react-router-dom";

const CartElement = ({data, count}) => {
    const dispatch = useDispatch();

    const [countValue, setCountValue] = useState(count);

    const summ = useMemo(() => {
        return data.price * count;
    }, [data, count]);

    function removeGoodFromCart() {
        dispatch(removeOneAction(data.id));
    }

    useEffect(() => {
        dispatch(changeCountAction(data.id, countValue));
    }, [countValue]);

    return (
        <div className={s.cart_element}>
            <div className={s.cart_element__image}>
                <Link to={`/catalog/${data.id}`}>
                    <img src={data.images[0]} alt=""/>
                </Link>
            </div>
            <div className={s.cart_element__name}>
                <Link to={`/catalog/${data.id}`}>
                    {data.name}
                </Link>
            </div>
            <div className={s.cart_element__price}><span>{data.price}</span> ₽</div>
            <div className={s.cart_element__count}>
                <Counter min={1} value={countValue} changeValue={(val) => setCountValue(val)} />
            </div>
            <div className={s.cart_element__summ}>
                <span>{summ}</span> ₽
            </div>
            <div className={s.cart_element__delete_btn}>
                <button
                    onClick={() => removeGoodFromCart()}
                >x</button>
            </div>
        </div>
    );
};

export default CartElement;