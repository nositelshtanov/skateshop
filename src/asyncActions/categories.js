import {Categories} from "../services/categories";
import {addCategoriesAction} from "../store/CategoriesReducer";


export const fetchCategories = () => {
    return async (dispatch) => {
        const res = await Categories.getAll();
        dispatch(addCategoriesAction(res.data));
    };
};