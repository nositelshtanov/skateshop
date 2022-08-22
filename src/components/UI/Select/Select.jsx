import React from 'react';
import s from "./Select.module.scss";

const Select = ({defaultName, values = [], onChange, value, fontWeight = "bold", ...props}) => {
    return (
        <div className={s.wrapper} {...props}>
            <select value={value} onChange={onChange} style={{fontWeight: fontWeight}}>
                <option value="">{defaultName}</option>
                {values ?
                    values.map(element => <option key={element.value} value={element.value}>{element.name}</option>) :
                    ""
                }
            </select>
        </div>
    );
};

export default Select;