import {useState, useMemo, useEffect} from "react";
import {useLocation} from "react-router-dom";

export function useNoScroll() {
    const [state, setState] = useState(false);

    useEffect(() => {
        if (state) {
            document.body.style.overflow = "hidden";
            return;
        }
        document.body.style.overflow = "visible";
    }, [state]);

    return [state, setState];
}

export function useProductsCountOnPage(rowCountOnPage, setCurrentPage) {
    const [columnsCountOnPage, setColumnsCountOnPage] = useState(4);

    const breakpoints = [
        {w: 1024, col: 3},
        {w: 640, col: 2},
        {w: 480, col: 1}
    ];

    const resizeHandler = () => {
        const width = window.screen.width;
        let currentColsCount = 4;

        breakpoints.forEach((point) => {
            if (width <= point.w) {
                currentColsCount = point.col;
            }
        });

        if (columnsCountOnPage != currentColsCount) {
            setColumnsCountOnPage(currentColsCount);
            setCurrentPage(1);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);

        resizeHandler();

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    const productsCountOnPage = useMemo(() => {
        return rowCountOnPage * columnsCountOnPage;
    }, [rowCountOnPage, columnsCountOnPage]);

    return productsCountOnPage;
}

export function useCurPage(filter) {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [filter]);

    return [currentPage, setCurrentPage];
}

export function useQuery() {
    const {search} = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
}