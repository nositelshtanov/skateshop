import React, {useEffect, useMemo, useState} from 'react';
import s from "./ProductsList.module.scss";
import ProductItem from "./ProductItem/ProductItem";
import ProductListHeader from "./ProductListHeader/ProductListHeader";
import Pagination from "../Pagination/Pagination";
import {useCurPage, useProductsCountOnPage} from "../../hooks";

const ProductsList = ({products = [], showBrandSelect = true, rowCountOnPage = 3, showPagination = true}) => {
    const [filter, setFilter] = useState({
        minMax: null,
        selectedBrand: "",
        selectedCategory: "",
        selectedSort: ""
    });

    const [currentPage, setCurrentPage] = useCurPage(filter);

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

            switch (prop) {
                case "price":
                    productsClone.sort((a, b) => {
                        if (order == "desc") [a, b] = [b, a];

                        return (+a.price) - (+b.price);
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
    }, [filter, products, currentPage]);

    const productsCountOnPage = useProductsCountOnPage(rowCountOnPage, setCurrentPage);

    const productsToView = useMemo(() => {
        return processedProducts.slice((currentPage - 1) * productsCountOnPage, productsCountOnPage * currentPage);
    }, [processedProducts, productsCountOnPage]);

    return (
        <div className={s.container}>
            <div className={s.products_list}>
                <ProductListHeader showBrandSelect={showBrandSelect} filter={filter} changeFilter={(newFilter) => setFilter(newFilter)} />
                <div className={s.products_list__wrapper}>
                    <div className={s.products_list__content}>
                        {productsToView.length ?
                            productsToView.map(product =>
                                <ProductItem key={product.id} data={product} />) :
                            <p className={s.empty}>Пусто...</p>
                        }
                    </div>
                </div>
            </div>
            {showPagination ?
                <div className={s.pagination_container}>
                    <Pagination currentPage={currentPage} changeCurrentPage={page => setCurrentPage(page)} elementsCountOnPage={productsCountOnPage} elementsTotalCount={processedProducts.length}/>
                </div> : ""}
        </div>
    );
};

export default ProductsList;