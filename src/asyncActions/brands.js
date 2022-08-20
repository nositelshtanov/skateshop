import BrandsService from "../services/brands";
import {addBrandsAction} from "../store/brandsReducer";


export const fetchBrands = () => {
    return async (dispatch) => {
        const res = await BrandsService.getAll();
        dispatch(addBrandsAction(res.data));
    };
};