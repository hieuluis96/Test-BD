
const defState = {
    matinhthanh: "HANOI",
    maquanhuyen: "CAUGIAY",
    tentinhthanh: "HÀ NỘI",
    tenquanhuyen: "CẦU GIẤY"
}

const ViTriReducer = (state = defState, action) => {
    switch (action.type) {
        case "CHON_TINH_THANH":
            return {
                ...state,
                matinhthanh: action.matinhthanh,
                maquanhuyen: "",
                tentinhthanh: action.tentinhthanh,
                tenquanhuyen: "",
               
            }
            break;
        case "CHON_TINH_THANH_VA_QUAN_HUYEN":
            return {
                ...state,
                matinhthanh: action.matinhthanh,
                maquanhuyen: action.maquanhuyen,
                tentinhthanh: action.tentinhthanh,
                tenquanhuyen: action.tenquanhuyen,
            }
        default:
            return state;
    }
}

export default ViTriReducer;