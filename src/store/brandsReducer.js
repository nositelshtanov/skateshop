const defaultState = {
    brands: []
};

export const brandsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_BRANDS":
            if (Array.isArray(action.payload)) return {...state, brands: [...state.brands, ...action.payload]};
            return {...state, brands: [...state.brands, action.payload]};
        default:
            return state;
    }
};

export const addBrandsAction = (payload) => ({type: "ADD_BRANDS", payload});