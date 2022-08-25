import React from 'react';
import H1 from "../components/UI/H1/H1";


const About = () => {
    return (
        <>
            <H1 text={"О сайте"} />
            <div className={"about_page_block"}>
                <h2>Сайт сделан в учебных целях!</h2>
                <p>Покупка товаров на данном сайте не является настоящей</p>
                <p>Все данные взяты с сайта <a href="https://proskate.ru/">proskate.ru/</a></p>
                <p>Разработчик: <a href="mailto:groshev523000@gmail.com">groshev523000@gmail.com</a></p>
            </div>
        </>
    );
};

export default About;