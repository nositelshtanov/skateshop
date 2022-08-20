import React, {useState} from 'react';
import s from "./Header.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {useNoScroll} from "../../hooks";
import {scrollToTopAnd} from "../../utils";
import {navBarLinks} from "../../router";

const Header = () => {
    const [searchInputText, setSearchInputText] = useState("");

    const [searchInputVisible, setSearchInputVisible] = useNoScroll();
    const [mobMenuVisible, setMobMenuVisible] = useNoScroll();

    const navigate = useNavigate();

    const makeSearch = () => {
        if (!searchInputText) return;

        navigate(`/search?query=${searchInputText}`);
        setSearchInputVisible(false);
        setSearchInputText("");
    };

    return (
        <>
            <div
                className={`${s.mobile_menu_back} ${mobMenuVisible ? s.active : ""}`}
                onClick={() => setMobMenuVisible(false)}
            >
            </div>

            <div
                className={`${s.searchInput_contaier} ${searchInputVisible ? s.active : ""}`}
                onClick={(e) => e.target.classList.contains(s.searchInput_contaier) ? setSearchInputVisible(false) : ""}
            >
                <div className={s.searchInput}>
                    <button
                        className={s.searchBtn}
                        onClick={() => makeSearch()}
                    >
                        <svg strokeWidth="1" stroke="#ffffff" fill="#ffffff" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
                    </button>
                    <input
                        placeholder={"Поиск..."}
                        type="text"
                        value={searchInputText}
                        onInput={(e) => setSearchInputText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.code === "Enter") {
                                makeSearch();
                            }
                        }}
                    />
                </div>
            </div>

            <aside className={`${s.mobile_menu} ${mobMenuVisible ? s.active : ""}`}>
                <button
                    className={s.mobile_menu__close_btn}
                    onClick={() => setMobMenuVisible(false)}
                >
                    <img src="/images/cancel.svg" alt="candelBtn"/>
                </button>
                <div className={s.mobile_menu__text}>
                    СТАРЕЙШИЙ СКЕЙТШОП СТОЛИЦЫ!
                </div>
                <nav className={s.mobile_menu__navigation}>
                    <ul>
                        {
                            navBarLinks.map(link =>
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        onClick={scrollToTopAnd(() => {setMobMenuVisible(false)})}
                                    >
                                        {link.name}
                                    </Link>
                                </li>)
                        }
                    </ul>
                </nav>
                <div className={s.mobile_menu__tels}>
                    <span><a href="tel:84956044552">8 (495) 604-45-52</a></span><br />
                    <span><a href="tel:88002014552">8 (800) 201-45-52</a></span>
                </div>
            </aside>
            <>
                <div className={s.head_info}>
                    <div className={s.head_info__text}>
                        СТАРЕЙШИЙ СКЕЙТШОП СТОЛИЦЫ!
                    </div>
                    <div className={s.head_info__tels}>
                        <span><a href="tel:84956044552">8 (495) 604-45-52</a></span><br />
                        <span><a href="tel:88002014552">8 (800) 201-45-52</a></span>
                    </div>
                </div>
                <header className={s.header}>
                    <button
                        className={s.burger_menu}
                        onClick={() => setMobMenuVisible(true)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className={s.logo}>
                        <Link
                            to={"/"}
                            onClick={scrollToTopAnd()}
                        >
                            <img className={s.logo__img} src="/images/logo.webp" alt="logo"/>
                            <div className={s.logo__text}>
                            <span>
                                Скейтшоп ПроДвижение
                            </span>
                            </div>
                        </Link>
                    </div>
                    <div className={s.menu}>
                        <ul>
                            {
                                navBarLinks.map(link =>
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            onClick={scrollToTopAnd()}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>)
                            }
                        </ul>
                    </div>
                    <div className={s.header_buttons}>
                        <ul>
                            <li>
                                <button
                                    className={s.search}
                                    onClick={() => setSearchInputVisible(true)}
                                ></button>
                            </li>
                            <li>
                                <div className={s.cart_wrapper}>
                                    <Link
                                        onClick={scrollToTopAnd()}
                                        to={"/cart"}
                                    ></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </header>
            </>
        </>
    );
};

export default Header;