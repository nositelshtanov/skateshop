import React from 'react';
import s from "./ProductsList.module.scss";
import RangeSlider from "../UI/RangeSlider/RangeSlider";

const ProductsList = ({products = [], showBrandSelect = true}) => {
    return (
        <div className={s.container}>
            <div className={s.products_list}>
                <header className={s.products_list__header}>
                    <div className={s.left_side}>
                        <div className={s.range_container}>
                            <RangeSlider min={0} max={50000} step={250} changeValuesCallback={newValue => console.log(newValue)} />
                        </div>
                        <div style={{height: 40, width: 180, border: "1px solid black"}}></div>
                        <div style={{height: 40, width: 180, border: "1px solid black"}}></div>
                    </div>
                    <div className={s.right_side}>
                        <div style={{width: 190, height: 40, border: "1px solid black"}}></div>
                    </div>
                </header>
                <div className={s.products_list__wrapper}>

                </div>
            </div>
        </div>
    );
};

export default ProductsList;