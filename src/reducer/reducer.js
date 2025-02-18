const initialState = {
    items: [],
    isBoolean: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item !== action.payload),
            };
        case 'NAVIGATE_PAGE':
            return {
                ...state,
                isBoolean: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;