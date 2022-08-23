import Main from "../pages/Home";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";
import Brands from "../pages/Brands";
import Brand from "../pages/Brand";
import About from "../pages/About";
import Cart from "../pages/Cart";
import SeachPage from "../pages/SeachPage";
import NotFound from "../pages/NotFound";
import React from "react";

export const routes = [
    { path: "/", element: <Main /> },
    { path: "/catalog", element: <Catalog /> },
    { path: "/catalog/:id", element: <Product /> },
    { path: "/brands", element: <Brands /> },
    { path: "/brands/:id", element: <Brand /> },
    { path: "/about", element: <About /> },
    { path: "/cart", element: <Cart /> },
    { path: "/search", element: <SeachPage /> },
    { path: "*", element: <NotFound /> },
];

export const navBarLinks = [
    {
        name: "главная",
        path: "/"
    },
    {
        name: "каталог",
        path: "/catalog"
    },
    {
        name: "о сайте",
        path: "/about"
    },
    {
        name: "бренды",
        path: "/brands"
    },
];