import React, {useMemo} from 'react';
import {Link} from "react-router-dom";
import s from "./BrandList.module.scss";
import {useSelector} from "react-redux";


const BrandsList = () => {
    const brands = useSelector((state) => state.brands.brands);

    const sortedBrands = useMemo(() => {
        if (!brands.length) return [];

        return [...brands].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    }, [brands]);

    return (
        <div className={s.wrapper}>
            <h1>Brands:</h1>
            <ul className={s.list}>
                {
                    brands.length ?
                        sortedBrands.map(brand =>
                            <li key={brand.id} className={s.list__elem}>
                                <Link to={`/brands/${brand.id}`}>
                                    {brand.name}
                                </Link>
                            </li>) :
                        <p>Пожалуйста</p>
                }
            </ul>
        </div>
    );
};

export default BrandsList;