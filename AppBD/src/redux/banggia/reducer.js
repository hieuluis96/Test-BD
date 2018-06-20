const initState = {
    isFetching: false,
    error: null,
    data: [],
}


function BangGiaReducer(state = initState, action) {
    switch (action.type) {
        case 'FETCHING_DATA_BANG_GIA':
            return {
                ...state,
                isFetching: true,
            }
            break;
        case 'FETCHING_DATA_BANG_GIA_SUCCESS':
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
            break;
        case 'FETCHING_DATA_BANG_GIA_FAILED':
            return {
                ...state,
                isFetching: false,
                error: action.error,
                data: []
            }
            break;
        default:
            return state;
    }
}
export default BangGiaReducer;