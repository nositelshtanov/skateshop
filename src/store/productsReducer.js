const defaultState = {
    products: []
};

export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_PRODUCTS":
            if (Array.isArray(action.payload)) return {...state, products: [...state.products, ...action.payload]};
            return {...state, products: [...state.products, action.payload]};
        default:
            return state;
    }
};

export const addProductsAction = (payload) => ({type: "ADD_PRODUCTS", payload});