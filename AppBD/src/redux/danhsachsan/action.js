import { API_SAN_BONG_THEO_QUAN_HUYEN_TINH_THANH, API_SAN_BONG_THEO_TINH_THANH } from "../../utils/api";

export function FETCHING_DATA() {
    return {
        type: 'FETCHING_DATA',
    }
}

export function FETCHING_DATA_SUCCESS(data) {
    return {
        type: 'FETCHING_DATA_SUCCESS',
        data,
    }
}

export function FETCHING_DATA_FAILED(error) {
    return {
        type: 'FETCHING_DATA_FAILED',
        error,
    }
}


export function getDuLieuSanCoQuanHuyen(matinhthanh, maquanhuyen,page,perPage) {
    return dispatch => {
        let timeout = new Promise((resolve, reject) => {
            setTimeout(reject, 5000, 'Connection Timeout');
        })
        let fetch = new Promise((resolve, reject) => {
            API_SAN_BONG_THEO_QUAN_HUYEN_TINH_THANH(matinhthanh, maquanhuyen,page,perPage)
                .then((result) => {
                    resolve(result)
                }).catch(reject)
        })
        return Promise.race([timeout, fetch])
            .then(dispatch(FETCHING_DATA()))
            .then((data) => {
                dispatch(FETCHING_DATA_SUCCESS(data))
            })
            .catch((error) => {
                dispatch(FETCHING_DATA_FAILED(error))
            })
    }
}





export function getDuLieuSanCoTinhThanh(matinhthanh) {
    return dispatch => {
        let timeout = new Promise((resolve, reject) => {
            setTimeout(reject, 5000, 'Conection Timeout');
        })
        let fetch = new Promise((resolve, reject) => {
            API_SAN_BONG_THEO_TINH_THANH(matinhthanh)
                .then((result) => {
                    resolve(result)
                }).catch(reject)
        })
        return Promise.race([timeout, fetch])
            .then(dispatch(FETCHING_DATA()))
            .then((data) => {
                dispatch(FETCHING_DATA_SUCCESS(data))
            })
            .catch((error) => {
                dispatch(FETCHING_DATA_FAILED(error))
            })
    }
}