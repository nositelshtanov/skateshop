import React, {useRef} from 'react';
import s from "./Share.module.scss";

const Share = ({text}) => {
    const ref = useRef();

    const onClickBtnHandler = (e) => {
        navigator.clipboard.writeText(text).then(rez => {
            ref.current.classList.add(s.active);

            setTimeout(() => {
                ref.current.classList.remove(s.active)
            }, 2000);
        })
    };

    return (
        <button onClick={onClickBtnHandler} className={s.btn}>
            <img src="/images/link.png" alt=""/>
            <div ref={ref} className={s.popup}>Скопировано!</div>
        </button>
    );
};

export default Share;