import React, {useMemo} from 'react';
import {useQuery} from "../hooks";
import H1 from "../components/UI/H1/H1";
import {useSelector} from "react-redux";
import ProductsList from "../components/ProductsList/ProductsList";

const SeachPage = () => {
    const queryObject = useQuery();
    const queryString = useMemo(() => queryObject.get("query"), [queryObject]);

    const searchedProducts = useSelector(state => {
        return state.products.products.filter(product => product.name.toLowerCase().includes(queryString.toLowerCase()));
    });

    return (
        <div>
            <H1 text={"Поиск"}/>
            <ProductsList products={searchedProducts}/>
        </div>
    );
};

export default SeachPage;