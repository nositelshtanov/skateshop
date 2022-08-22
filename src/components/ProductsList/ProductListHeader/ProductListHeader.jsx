import React from 'react';
import s from "./ProductListHeader.module.scss";
import RangeSlider from "../../UI/RangeSlider/RangeSlider";
import Select from "../../UI/Select/Select";
import {useSelector} from "react-redux";

const ProductListHeader = ({filter, changeFilter}) => {
    const brands = useSelector(state => {
        return state.brands.brands.map(brand => ({name: brand.name, value: brand.id}));
    });

    const categories = useSelector(state => {
        return state.categories.categories.map(category => ({name: category.name, value: category.id}));
    });

    const sortingVariants = [
        {name: "Цена от низкой", value: "price-asc"},
        {name: "Цена от высокой", value: "price-desc"},
        {name: "Название от А", value: "name-asc"},
        {name: "Название от Я", value: "name-desc"},
    ];

    return (
        <header className={s.products_list__header}>
            <div className={s.left_side}>
                <div className={s.range_container}>
                    <RangeSlider min={0} max={50000} step={250} changeValuesCallback={newValue => changeFilter({...filter, minMax: newValue})} />
                </div>
                <Select value={filter.selectedBrand} onChange={(e) => changeFilter({...filter, selectedBrand: e.target.value})} defaultName={"Бренды"} values={brands}/>
                <Select value={filter.selectedCategory} onChange={(e) => changeFilter({...filter, selectedCategory: e.target.value})} defaultName={"Категории"} values={categories}/>
            </div>
            <div className={s.right_side}>
                <Select value={filter.selectedSort} onChange={(e) => changeFilter({...filter, selectedSort: e.target.value})} style={{width: 190}} fontWeight={"normal"} defaultName={"Сортировать по"} values={sortingVariants}/>
            </div>
        </header>
    );
};

export default ProductListHeader;