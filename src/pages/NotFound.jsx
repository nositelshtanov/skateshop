import React from 'react';
import H1 from "../components/UI/H1/H1";

const NotFound = () => {
    return (
        <>
            <H1 text={"Страница не найдена("} />
            <img className={"notFoundImg"} src="/images/notFound.jpg" alt=""/>
        </>
    );
};

export default NotFound;