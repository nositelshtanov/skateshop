const defaultState = {
    goods: []
};

export function cartReducer(state = defaultState, action) {
    switch (action.type) {
        case "ADD_GOODS":
            if (!Array.isArray(action.payload)) return {...state, goods: [
                ...state.goods,
                    {
                        count: 1,
                        good: action.payload
                    }
                ]};
            // далее добавляем несколько товаров сразу
            return {...state, goods: [
                    ...state.goods,
                    ...action.payload.map(good => ({count: 1, good}))
                ]};
        case "ADD_GOOD_WITH_COUNT":
            return {...state, goods: [...state.goods, {
                    good: action.payload.good,
                    count: action.payload.count
                }]};
        case "REMOVE_ALL":
            return {...state, goods: []};
        case "REMOVE_ONE":
            return {...state, goods: [...state.goods.filter(goodObject => goodObject.good.id != action.payload.id)]};
        case "CHANGE_COUNT":
            return {...state, goods: [...state.goods.map(goodObject => {
                    if (goodObject.good.id == action.payload.id) {
                        return {
                            ...goodObject,
                            count: action.payload.count
                        };
                    }
                    return goodObject;
                })]};
        default:
            return state;
    }
};

export const addGoodsAction = (payload) => {
    return {type: "ADD_GOODS", payload};
};

export const removeAllAction = (payload) => {
    return {type: "REMOVE_ALL", payload};
};

export const removeOneAction = (id) => {
    return {type: "REMOVE_ONE", payload: {id}};
};

export const changeCountAction = (id, newCount) => {
    return {type: "CHANGE_COUNT", payload: {id, count: newCount}};
};

export const addGoodWithCountAction = (good, count) => {
    return {type: "ADD_GOOD_WITH_COUNT", payload: {good, count}};
};