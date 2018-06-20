const initState = {
    isFetching: false,
    error: null,
    data: [],
}


function DanhSachSanReducer(state = initState, action) {
    switch (action.type) {
        case 'FETCHING_DATA':
            return {
                ...state,
                isFetching: true,
            }

            break;
        case 'FETCHING_DATA_SUCCESS':
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
            break;
        case 'FETCHING_DATA_FAILED':
            return {
                ...state,
                isFetching: false,
                error: action.error,
                data: []
            }
        default:
            return state;
    }
}

export default DanhSachSanReducer;