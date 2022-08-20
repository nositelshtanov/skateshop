import Goods from "../services/goods";
import {addProductsAction} from "../store/productsReducer";


export const fetchGoods = () => {
    return async (dispatch) => {
        const res = await Goods.getAll();
        dispatch(addProductsAction(res.data));
    };
};