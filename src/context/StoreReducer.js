const storeReducer = (state, action) => {
    switch (action.type) {
        case 'SELECT_ITEM':
            return { ...state, plan: action.payload };
        default:
            return state;
    }
};

export default storeReducer;