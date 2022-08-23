import React from 'react';
import s from "./H1.module.scss";

const H1 = ({text}) => {
    return (
        <div className={s.h1_wrapper}>
            <h1>{text}</h1>
        </div>
    );
};

export default H1;