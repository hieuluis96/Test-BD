import { API_SAN_BONG_BANG_GIA } from "../../utils/api";

export function FETCHING_DATA() {
    return {
        type: 'FETCHING_DATA_BANG_GIA',
    }
}

export function FETCHING_DATA_SUCCESS(data) {
    return {
        type: 'FETCHING_DATA_BANG_GIA_SUCCESS',
        data,
    }
}

export function FETCHING_DATA_FAILED(error) {
    return {
        type: 'FETCHING_DATA_BANG_GIA_FAILED',
        error,
    }
}

export function getBangGiaSanTrangChu(id) {
    return dispatch => {
        let timeout = new Promise((resolve, reject) => {
            setTimeout(reject, 5000, "Connect TimeOut");
        })
        let promise = new Promise((resolve, reject) => {
            API_SAN_BONG_BANG_GIA(id)
                .then((result) => {
                    resolve(result)
                }).catch(reject)
        })
        return Promise.race([timeout, promise])
            .then(dispatch(FETCHING_DATA()))
            .then((data) => dispatch(FETCHING_DATA_SUCCESS(data)))
            .catch((error) => dispatch(FETCHING_DATA_FAILED(error)))
    }
}
