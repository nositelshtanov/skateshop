import React, {useEffect, useMemo, useRef, useState} from 'react';
import s from "./RangeSlider.module.css";

const RangeSlider = ({min = 0, max = 1000, changeValuesCallback = (value) => "", step = null}) => {
    const slider_content = useRef();
    const progress = useRef();
    const leftInfo = useRef();
    const rightInfo = useRef();
    const slider_line = useRef();
    const leftToggler = useRef();
    const rightToggler = useRef();

    const [leftValue, setLeftValue] = useState(0);
    const [rightValue, setRightValue] = useState(0);

    const [oldValueA, setOldValueA] = useState(min);
    const [oldValueB, setOldValueB] = useState(max);
    const [currentValueA, setCurrentValueA] = useState(min);
    const [currentValueB, setCurrentValueB] = useState(max);

    const [valuesChanging, setValuesChanging] = useState(false);

    const range = useMemo(() => max - min, [min, max]);

    useEffect(() => {
        //if (min > max) [min, max] = [max, min];

        const stepGridValue = range / slider_content.current.clientWidth;

        if (step && step < stepGridValue) {
            step = stepGridValue;
        }
    }, []);

    const togglerHandler = (e) => {
        e.preventDefault();

        setValuesChanging(true);

        const isLeftToggled = e.target.classList.contains(s.left_toggler);
        const shiftX = isLeftToggled ? e.clientX - parseInt(e.target.style["left"]) : parseInt(e.target.style["right"]) + e.clientX;
        const stepValue = range / slider_content.current.clientWidth;

        const togglerMove = (event) => {
            if (isLeftToggled) {
                let value = event.clientX - shiftX;

                if (value < 0) value = 0;
                if (rightValue + value >= slider_content.current.clientWidth) return;

                leftInfo.current.style.left = progress.current.style.left = e.target.style.left = `${value}px`;
                progress.current.style.width = `${((slider_content.current.clientWidth - value - rightValue) / slider_content.current.clientWidth) * 100}%`;

                let newCurrentValue = Math.round(min + (value * stepValue));

                if (!(newCurrentValue % step == 0)) {
                    newCurrentValue -= newCurrentValue % step;
                }

                setLeftValue(value);
                setCurrentValueA(newCurrentValue);
            } else {
                let value = shiftX - event.clientX;

                if (value < 0) value = 0;
                if (leftValue + value >= slider_content.current.clientWidth) return;

                rightInfo.current.style.right = e.target.style.right = `${value}px`;
                progress.current.style.width = `${((slider_content.current.clientWidth - value - leftValue) / slider_content.current.clientWidth) * 100}%`;

                let newCurrentValue = Math.round(max - (value * stepValue));

                if (!(newCurrentValue % step == 0)) {
                    newCurrentValue += step - (newCurrentValue % step);
                }

                setRightValue(value);
                setCurrentValueB(newCurrentValue);
            }
        };


        document.addEventListener("mousemove", togglerMove);

        document.addEventListener("mouseup", function mouseUpHandler(e) {
            document.removeEventListener("mousemove", togglerMove);
            document.removeEventListener("mouseup", mouseUpHandler);

            setValuesChanging(false);
        })
    };

    const clickBarHandler = (e) => {
        if (e.target.classList.contains(s.click_bar)) {
            let offsetX = e.nativeEvent.offsetX;
            const left = parseInt(leftInfo.current.style.left);
            const right = parseInt(rightInfo.current.style.right);
            const halfSliderLineWidth = (slider_line.current.clientWidth - left - right) / 2;
            const leftWidth = left + halfSliderLineWidth;
            const rightWidth = right + halfSliderLineWidth;
            const stepValue = range / slider_content.current.clientWidth;

            if (offsetX < leftWidth) {
                const diffrence = offsetX - left;
                const value = left + diffrence;

                leftInfo.current.style.left = progress.current.style.left = leftToggler.current.style.left = `${value}px`;
                progress.current.style.width = `${((slider_content.current.clientWidth - value - right) / slider_content.current.clientWidth) * 100}%`;

                let newCurrentValue = Math.round(min + (value * stepValue));

                if (!(newCurrentValue % step == 0)) {
                    newCurrentValue -= newCurrentValue % step;
                }

                setLeftValue(value);
                setCurrentValueA(newCurrentValue);

                changeValuesCallback([newCurrentValue, currentValueB]);
            } else {
                offsetX = slider_content.current.clientWidth - offsetX;

                const diffrence = offsetX - right;
                const value = right + diffrence;

                rightInfo.current.style.right = rightToggler.current.style.right = `${value}px`;
                progress.current.style.width = `${((slider_content.current.clientWidth - value - left) / slider_content.current.clientWidth) * 100}%`;

                let newCurrentValue = Math.round(max - (value * stepValue));

                if (!(newCurrentValue % step == 0)) {
                    newCurrentValue += step - (newCurrentValue % step);
                }

                setRightValue(value);
                setCurrentValueB(newCurrentValue);

                changeValuesCallback([currentValueA, newCurrentValue]);
            }
        }
    };

    useEffect(() => {
        if (!valuesChanging) {
            changeValuesCallback([currentValueA, currentValueB]);
        }
    }, [valuesChanging]);

    return (
        <div  className={s.container}>
            <div ref={slider_line} className={s.slider_line} onClick={clickBarHandler}>
                <div
                    className={s.click_bar}
                ></div>
                <div className={s.bar}></div>
            </div>
            <div ref={slider_content} className={s.slider_content}>
                <div className={s.left_info} ref={leftInfo} style={{left: 0}}>
                    {currentValueA}
                </div>
                <div
                    style={{left: 0}}
                    className={s.left_toggler}
                    onMouseDown={togglerHandler}
                    ref={leftToggler}
                ></div>
                <div ref={progress} className={s.progress} style={{width: "100%"}}></div>
                <div
                    style={{right: 0}}
                    className={s.right_toggler}
                    onMouseDown={togglerHandler}
                    ref={rightToggler}
                ></div>
                <div className={s.right_info} ref={rightInfo} style={{right: 0}}>
                    {currentValueB}
                </div>
            </div>
        </div>
    );
};

export default RangeSlider;