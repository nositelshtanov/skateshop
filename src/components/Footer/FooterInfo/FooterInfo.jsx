import React from 'react';
import s from "./FooterInfo.module.scss";
import {Link} from "react-router-dom";
import {scrollToTopAnd} from "../../../utils";

const FooterInfo = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footer_content}>
                <div className={s.left_column}>
                    <Link
                        to={"/"}
                        className={s.logo_text}
                        onClick={scrollToTopAnd()}
                    >
                        <div className={s.logo_text__logo}>
                            <img src="/images/logo.webp" alt="logo"/>
                        </div>
                        <div className={s.logo_text__text}>
                            <h4>скейтшоп<br /> продвижение</h4>
                            <p>старейший скейтшоп столицы</p>
                        </div>
                    </Link>
                </div>
                <div className={s.right_column}>
                    <div className={s.tels}>
                        <div className={s.tels_inner}>
                            <div className={s.tels_inner__icon}></div>
                            <div className={s.tels_inner__tels}>
                                <a href="tel:84956044552">8 (495) 604-45-52</a>
                                <a href="tel:88002014552">8 (800) 201-45-52</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className={s.toTop}
                onClick={scrollToTopAnd()}
            >
                <div className={s.icon}></div>
            </button>
        </footer>
    );
};

export default FooterInfo;