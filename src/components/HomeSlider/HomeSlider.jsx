import React from 'react';
import s from "./HomeSlider.module.scss";
import {Autoplay, Pagination} from "swiper";
import img1 from "../../assets/homeSliderImages/1.webp";
import img2 from "../../assets/homeSliderImages/2.webp";
import img3 from "../../assets/homeSliderImages/3.webp";
import img4 from "../../assets/homeSliderImages/4.webp";
import img5 from "../../assets/homeSliderImages/5.webp";
import 'swiper/css/pagination';
import {SwiperSlide, Swiper} from "swiper/react";

const HomeSlider = () => {
    const images = [img1, img2, img3, img4, img5];

    return (
        <div className={s.slider_wrapper}>
            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                pagination={{clickable: true}}
                modules={[Autoplay, Pagination]}
            >
                {
                    images.map(img =>
                        <SwiperSlide key={img}>
                            <img src={img} alt="pict"/>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default HomeSlider;