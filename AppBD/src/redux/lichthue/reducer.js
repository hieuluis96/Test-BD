const initialState = {

}

function LichThueReducer(state = initialState, action) {
    switch (action.type) {
        case "LOAD_LICH_THUE":
            return {
                ...state,
            }
            break;
        default:
            return state;
    }
}

export default LichThueReducer;