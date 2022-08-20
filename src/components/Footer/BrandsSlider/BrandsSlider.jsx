import React from 'react';
import s from "./BrandsSlider.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const BrandsSlider = () => {
    const brands = useSelector((state) => state.brands.brands);

    return (
        <div className={s.brands}>
            <h3 className={s.brands_h3}>Бренды и производители</h3>
            <div className={s.brands_slider}>
                {brands.length ?
                    <Swiper
                        slidesPerView={1}
                        slidesPerGroup={1}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        modules={[Autoplay]}
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
                        {brands.map((brand, i) =>
                            <SwiperSlide key={brand.id}>
                                <Link to={`/brands/${brand.id}`}>
                                    <img src={brand.preview} alt={brand.name}/>
                                </Link>
                            </SwiperSlide>)}
                    </Swiper> :
                    <p className={s.loader}>Идет загрузка...</p>
                }
            </div>
        </div>
    );
};

export default BrandsSlider;