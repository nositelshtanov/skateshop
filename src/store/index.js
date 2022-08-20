import {applyMiddleware, combineReducers, createStore} from "redux";
import {productsReducer} from "./productsReducer";
import {brandsReducer} from "./brandsReducer";
import {categoriesReducer} from "./CategoriesReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    products: productsReducer,
    brands: brandsReducer,
    categories: categoriesReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));