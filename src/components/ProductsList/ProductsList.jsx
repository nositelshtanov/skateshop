import React, {useState} from 'react';
import s from "./ProductsList.module.scss";
import RangeSlider from "../UI/RangeSlider/RangeSlider";
import ProductItem from "./ProductItem/ProductItem";

const ProductsList = ({products = [], showBrandSelect = true}) => {
    const [minMax, setMinMax] = useState(null);
    console.log(products);
    return (
        <div className={s.container}>
            <div className={s.products_list}>
                <header className={s.products_list__header}>
                    <div className={s.left_side}>
                        <div className={s.range_container}>
                            <RangeSlider min={0} max={50000} step={250} changeValuesCallback={newValue => setMinMax(newValue)} />
                        </div>
                        <div style={{height: 40, width: 180, border: "1px solid black"}}></div>
                        <div style={{height: 40, width: 180, border: "1px solid black"}}></div>
                    </div>
                    <div className={s.right_side}>
                        <div style={{width: 190, height: 40, border: "1px solid black"}}></div>
                    </div>
                </header>
                <div className={s.products_list__wrapper}>
                    <div className={s.products_list__content}>
                        {
                            products.map(product =>
                                <ProductItem key={product.id} data={product} />)
                        }
                        {
                            products.map(product =>
                                <ProductItem key={product.id} data={product} />)
                        }
                        {
                            products.map(product =>
                                <ProductItem key={product.id} data={product} />)
                        }
                        {
                            products.map(product =>
                                <ProductItem key={product.id} data={product} />)
                        }
                        {
                            products.map(product =>
                                <ProductItem key={product.id} data={product} />)
                        }
                        {
                            products.map(product =>
                                <ProductItem key={product.id} data={product} />)
                        }
                        {
                            products.map(product =>
                                <ProductItem key={product.id} data={product} />)
                        }
                        {
                            products.map(product =>
                                <ProductItem key={product.id} data={product} />)
                        }
                        {
                            products.map(product =>
                                <ProductItem key={product.id} data={product} />)
                        }
                        {
                            products.map(product =>
                                <ProductItem key={product.id} data={product} />)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsList;