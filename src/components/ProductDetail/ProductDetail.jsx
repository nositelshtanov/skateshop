import React, {useState} from 'react';
import s from "./ProductDetail.module.scss";
import {useSelector} from "react-redux";
import Property from "./Property/Property";
import {Link} from "react-router-dom";
import Counter from "../UI/Counter/Counter";
import Share from "../UI/Share/Share";
import DetailProductSlider from "../UI/DetailProductSlider/DetailProductSlider";

const ProductDetail = ({data}) => {
    const location = window.location.href;

    const [count, setCount] = useState(1);

    const category = useSelector(state => {
        if (!data) return null;
        return state.categories.categories.filter(category => category.id == data.categoryId)[0];
    });

    return (
        <div className={s.product_container}>
            {data ?
                <>
                    <h1>{data.name}</h1>
                    <div className={s.product_data}>
                        <div className={s.left_side}>
                            <DetailProductSlider images={[...data.images, ...data.images, ...data.images]} />
                        </div>
                        <div className={s.right_side}>
                            <div className={s.product_text}>
                                <Property name={"Производитель:"}>
                                    <Link to={`/brands/${data.brandId}`}>{data.brandName}</Link>
                                </Property>
                                {category ? <Property name={"Категория:"} value={category.name} /> : "" }
                                <Property name={"Описание:"} value={data.desc} />
                                {Object.entries(data.characteristics).map(characteristic =>
                                        <Property key={characteristic[0]} name={characteristic[0]} value={characteristic[1]} />
                                    )
                                }
                                <Property name={"Количество:"}>
                                    <Counter min={1} value={count} changeValue={(value) => setCount(value)} />
                                </Property>
                                <Property
                                    name={<span><strong className="bold">{data.price}</strong> ₽</span>}
                                >
                                    <button className={s.buy}>в корзину</button>
                                </Property>
                                <Property name={"Поделиться:"}>
                                    <Share text={location} />
                                </Property>
                            </div>
                        </div>
                    </div>
                </> : <p className={s.load}>Загрузка...</p>}
        </div>
    );
};

export default ProductDetail;