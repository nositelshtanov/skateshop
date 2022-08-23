import React from 'react';
import s from "./Counter.module.scss";

const Counter = ({min, value, changeValue}) => {
    return (
        <div className={s.box}>
            {value <= min ?
                <button disabled>-</button> :
                <button onClick={() => changeValue(value - 1)}>-</button>}
            <input readOnly={true} type="text" maxLength="2" value={value} />
            <button onClick={() => changeValue(value + 1)}>+</button>
        </div>
    );
};

export default Counter;