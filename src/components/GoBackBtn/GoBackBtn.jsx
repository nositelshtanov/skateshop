import React from 'react';
import s from "./GoBackBtn.module.scss";
import {useNavigate} from "react-router-dom";

const GoBackBtn = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className={s.btn}
        >
            Назад
        </button>
    );
};

export default GoBackBtn;