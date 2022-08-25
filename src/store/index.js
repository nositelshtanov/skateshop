import {applyMiddleware, combineReducers, createStore} from "redux";
import {productsReducer} from "./productsReducer";
import {brandsReducer} from "./brandsReducer";
import {categoriesReducer} from "./CategoriesReducer";
import {cartReducer} from "./CartReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    products: productsReducer,
    brands: brandsReducer,
    categories: categoriesReducer,
    cart: cartReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));