import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../../pages/Home";
import About from "../../pages/About";
import Catalog from "../../pages/Catalog";
import Cart from "../../pages/Cart";
import SeachPage from "../../pages/SeachPage";

const RoutesList = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Main />}/>
            <Route path={"/catalog"} element={<Catalog />}/>
            <Route path={"/about"} element={<About />}/>
            <Route path={"/cart"} element={<Cart />}/>
            <Route path={"/search"} element={<SeachPage />}/>
            <Route path={"*"} element={<Main />}/> {/*вставить сюдым страницу not found*/}
        </Routes>
    );
};

export default RoutesList;