const defaultState = {
    categories: []
};

export const categoriesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CATEGORIES":
            if (Array.isArray(action.payload)) return {...state, categories: [...state.categories, ...action.payload]};
            return {...state, categories: [...state.categories, action.payload]};
        default:
            return state;
    }
};

export const addCategoriesAction = (payload) => ({type: "ADD_CATEGORIES", payload});