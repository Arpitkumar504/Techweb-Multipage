const reducer = (state, action) => {
    switch (action.type) {
        case "getproduct": {
            return {
                ...state,
                data: action.payload.alldata,
            }
        }
    }
    return state;
}

export default reducer;