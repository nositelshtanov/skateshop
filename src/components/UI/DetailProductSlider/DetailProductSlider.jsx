import React, {useEffect, useRef, useState} from 'react';
import s from "./DetailProductSlider.module.scss";

const DetailProductSlider = ({images}) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const lineRef = useRef();

    useEffect(() => {
        const moveValue = (98 * (currentImgIndex + 1)) - 98 * 3;
        lineRef.current.style.transform = `translateX(-${moveValue}px)`;
    }, [currentImgIndex]);

    return (
        <div className={s.slider_container}>
            <div className={s.slider}>
                <div className={s.slider__imgs}>
                    {images.map((src, key) =>
                        <img className={`${s.img} ${key == currentImgIndex ? s.active : ""}`} key={src} src={src} alt="img"/>)}
                </div>
                <div className={s.slider__btns}>
                    <div className={s.left_btn}>
                        <button
                            onClick={() => {
                                if (currentImgIndex > 0) setCurrentImgIndex(currentImgIndex - 1)
                            }}
                        ></button>
                    </div>
                    <div className={s.btn_images}>
                        <div ref={lineRef} className={s.btn_images__line}>
                            {images.map((src, key) =>
                                <img
                                    onClick={() => setCurrentImgIndex(key)}
                                    className={`${s.img} ${key == currentImgIndex ? s.active : ""}`}
                                    key={src}
                                    src={src}
                                    alt="img"
                                />)}
                        </div>
                    </div>
                    <div className={s.right_btn}>
                        <button
                            onClick={() => {
                                if (currentImgIndex < images.length - 1) setCurrentImgIndex(currentImgIndex + 1);
                            }}
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProductSlider;