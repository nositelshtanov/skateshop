import React from 'react';
import s from "./Pagination.module.scss";
import {useMemo} from "react";

const Pagination = ({elementsCountOnPage, elementsTotalCount, currentPage, changeCurrentPage}) => {
    const [totalPages, pagesArray] = useMemo(() => {
        const totalPages =  Math.ceil(elementsTotalCount / elementsCountOnPage);

        if (totalPages) {
            let i = 1;
            const pagesArray = Array.from(Array(totalPages)).map(page => i++);
            return [totalPages, pagesArray];
        }

        return [totalPages, []];
    }, [elementsTotalCount, elementsCountOnPage]);

    return (
        <div className={s.pagination_wrapper}>
            <div className={s.pagination}>
                {totalPages ? pagesArray.map(page =>
                    <button
                        key={page}
                        onClick={(e) => changeCurrentPage(page)}
                        className={`${s.btn} ${page == currentPage ? s.active : ""}`}
                    >
                        {page}
                    </button>) : ""}
            </div>
        </div>
    );
};

export default Pagination;