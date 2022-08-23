import React from 'react';
import s from "./Property.module.scss";

const Property = ({name, value, children}) => {
    return (
        <div className={s.property}>
            <div className={s.property__name}>
                {name}
            </div>
            <div className={s.property__value}>
                {children ?
                    children :
                    value
                }
            </div>
        </div>
    );
};

export default Property;