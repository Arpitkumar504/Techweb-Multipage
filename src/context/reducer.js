const reducer = (state, action) => {
    switch (action.type) {
        case "getproduct": {
            return {
                ...state,
                data: action.payload.alldata,
            }
        }
        case "getsingleproduct": {
            return {
                ...state,
                singleproduct: action.payload.singledata,
            }
        }
    }
    return state;
}

export default reducer;