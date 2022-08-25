import React from 'react';
import H1 from "../components/UI/H1/H1";
import GoBackBtn from "../components/GoBackBtn/GoBackBtn";

const NotFound = () => {
    return (
        <>
            <H1 text={"Страница не найдена("} />
            <img className={"notFoundImg"} src="/images/notFound.jpg" alt=""/>
            <div className="child_center">
                <GoBackBtn />
            </div>
        </>
    );
};

export default NotFound;