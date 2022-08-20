import React from 'react';
import 'swiper/css';
import BrandsSlider from "./BrandsSlider/BrandsSlider";
import FooterInfo from "./FooterInfo/FooterInfo";

const Footer = () => {
    return (
        <div style={{marginTop: 25}}>
            <BrandsSlider />
            <FooterInfo />
        </div>
    );
};

export default Footer;