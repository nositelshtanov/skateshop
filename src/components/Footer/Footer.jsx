import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import s from "./Footer.module.scss";
import 'swiper/css';
import {Link} from "react-router-dom";
import {scrollToTopAnd} from "../../utils";

const Footer = () => {
    const arr = [
        "https://proskate.ru/thumb/2/9My3y4xQ1YwIgMilOLsqAA/100r90/d/magnet-mishka-keep-watch_1.jpg",
        "https://proskate.ru/thumb/2/uJDAnEX2_cWvM0DhYkO9BQ/100r90/d/1193mfgr.jpg",
        "https://proskate.ru/thumb/2/klS1MC1sFVTapY_Zo_6YZg/100r90/d/14062133_640x640.jpg",
        "https://proskate.ru/thumb/2/c4gC3snl4_j_9Q2UI9wdlA/100r90/d/2-b40f6c7e36090c6809f2a58ee1255ed6.jpg",
        "https://proskate.ru/thumb/2/EchrAZAJJby3zASrHG0JCw/100r90/d/footwork_logo.jpg",
        "https://proskate.ru/thumb/2/cpgBOMUZOylfVxdv3S_J_A/100r90/d/elmbffxbzcs.jpg",
        "https://proskate.ru/thumb/2/8CPN7wnLgeq3HF54TffNEQ/100r90/d/footprint.jpg",
        "https://proskate.ru/thumb/2/e61wcV8ONucWgrIb-VDNaw/100r90/d/adidas.jpg",
        "https://proskate.ru/thumb/2/9WU6Jt11uQ8d3Vkc_YRwqA/100r90/d/ripndipclothinglogo_155x.gif",

        "https://proskate.ru/thumb/2/9My3y4xQ1YwIgMilOLsqAA/100r90/d/magnet-mishka-keep-watch_1.jpg",
        "https://proskate.ru/thumb/2/uJDAnEX2_cWvM0DhYkO9BQ/100r90/d/1193mfgr.jpg",
        "https://proskate.ru/thumb/2/klS1MC1sFVTapY_Zo_6YZg/100r90/d/14062133_640x640.jpg",
        "https://proskate.ru/thumb/2/c4gC3snl4_j_9Q2UI9wdlA/100r90/d/2-b40f6c7e36090c6809f2a58ee1255ed6.jpg",
        "https://proskate.ru/thumb/2/EchrAZAJJby3zASrHG0JCw/100r90/d/footwork_logo.jpg",
        "https://proskate.ru/thumb/2/cpgBOMUZOylfVxdv3S_J_A/100r90/d/elmbffxbzcs.jpg",
        "https://proskate.ru/thumb/2/8CPN7wnLgeq3HF54TffNEQ/100r90/d/footprint.jpg",
        "https://proskate.ru/thumb/2/e61wcV8ONucWgrIb-VDNaw/100r90/d/adidas.jpg",
        "https://proskate.ru/thumb/2/9WU6Jt11uQ8d3Vkc_YRwqA/100r90/d/ripndipclothinglogo_155x.gif",

        "https://proskate.ru/thumb/2/9My3y4xQ1YwIgMilOLsqAA/100r90/d/magnet-mishka-keep-watch_1.jpg",
        "https://proskate.ru/thumb/2/uJDAnEX2_cWvM0DhYkO9BQ/100r90/d/1193mfgr.jpg",
        "https://proskate.ru/thumb/2/klS1MC1sFVTapY_Zo_6YZg/100r90/d/14062133_640x640.jpg",
        "https://proskate.ru/thumb/2/c4gC3snl4_j_9Q2UI9wdlA/100r90/d/2-b40f6c7e36090c6809f2a58ee1255ed6.jpg",
        "https://proskate.ru/thumb/2/EchrAZAJJby3zASrHG0JCw/100r90/d/footwork_logo.jpg",
        "https://proskate.ru/thumb/2/cpgBOMUZOylfVxdv3S_J_A/100r90/d/elmbffxbzcs.jpg",
        "https://proskate.ru/thumb/2/8CPN7wnLgeq3HF54TffNEQ/100r90/d/footprint.jpg",
        "https://proskate.ru/thumb/2/e61wcV8ONucWgrIb-VDNaw/100r90/d/adidas.jpg",
        "https://proskate.ru/thumb/2/9WU6Jt11uQ8d3Vkc_YRwqA/100r90/d/ripndipclothinglogo_155x.gif",
    ];
    return (
        <div>
            <div className={s.brands}>
                <h3 className={s.brands_h3}>Бренды и производители</h3>
                <div className="brands_slider">
                    <Swiper
                        slidesPerView={1}
                        slidesPerGroup={1}
                        autoplay={1000}
                        breakpoints={{
                            240: {
                                slidesPerView:3,
                                slidesPerGroup:3
                            },
                            480: {
                                slidesPerView:5,
                                slidesPerGroup:5
                            },
                            760: {
                                slidesPerView:7,
                                slidesPerGroup:7
                            },
                            900: {
                                slidesPerView:9,
                                slidesPerGroup:9
                            }
                        }}
                    >
                        {arr.map((src, i) =>
                            <SwiperSlide key={i}>
                                <a href={`#${i}`}>
                                    <img src={src} alt="pict"/>
                                </a>
                            </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
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
        </div>
    );
};

export default Footer;