import React, {useMemo, useState} from 'react';
import s from "./ProductsList.module.scss";
import ProductItem from "./ProductItem/ProductItem";
import ProductListHeader from "./ProductListHeader/ProductListHeader";

const ProductsList = ({products = [], showBrandSelect = true}) => {
    const [filter, setFilter] = useState({
        minMax: null,
        selectedBrand: "",
        selectedCategory: "",
        selectedSort: ""
    });

    const processedProducts = useMemo(() => {
        let productsClone = [...products];

        if (filter.minMax) {
            const [min, max] = filter.minMax;
            productsClone = productsClone.filter(product => (+product.price) >= min && (+product.price) <= max);
        }

        if (filter.selectedBrand) {
            productsClone = productsClone.filter(product => product.brandId == filter.selectedBrand);
        }

        if (filter.selectedCategory) {
            productsClone = productsClone.filter(product => product.categoryId == filter.selectedCategory);
        }

        if (filter.selectedSort) {
            const [prop, order] = filter.selectedSort.split("-");
            // Проверить сортировку!
            switch (prop) {
                case "price":
                    productsClone.sort((a, b) => {
                        if (order == "desc") [a, b] = [b, a];

                        return +b.price - +a.price;
                    });
                    break;
                case "name":
                    productsClone.sort((a, b) => {
                        if (order == "desc") [a, b] = [b, a];

                        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
                    });
                    break;
            }
        }

        return productsClone;
    }, [filter, products]);

    return (
        <div className={s.container}>
            <div className={s.products_list}>
                <ProductListHeader filter={filter} changeFilter={(newFilter) => setFilter(newFilter)} />
                <div className={s.products_list__wrapper}>
                    <div className={s.products_list__content}>
                        {
                            processedProducts.map(product =>
                                <ProductItem key={product.id} data={product} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsList;