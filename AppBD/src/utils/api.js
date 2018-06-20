const API = "https://api.sporty.mobi";

function getHeaders() {
    let header = new Headers();
    header.append("Accept", "application/json");
    return header;
}

function builtParam(paramName, param) {
    return "&" + paramName + "=" + param;
}

function builtPage(paramName, param) {
    return "?" + paramName + "=" + param;
}
const LAY_DANH_SACH_DIA_PHUONG = "/enduser/tinh_thanh";
const LAY_DANH_SACH_SAN_BONG_THEO_DIA_PHUONG = "/enduser/san_bong";
const LAY_BANG_GIA_LICH_THUE_MO_RONG = "/enduser/san_bong/";
const LAY_BANG_GIA = "/enduser/bang_gia";
const LAY_LICH_THUE = "/enduser/lich_thue";

export function API_VI_TRI() {
    return fetch(API + LAY_DANH_SACH_DIA_PHUONG, {
        method: "GET",
        headers: getHeaders()
    })
        .then(response => {
            if (response.status === 200) return response.json();
            else return null;
            // ném trả lỗi tại đây
        })
        .then(data => {
            return data.result;
        })
        .catch((err) => {
            return err;
        })
}

export function API_SAN_BONG_THEO_QUAN_HUYEN_TINH_THANH(matinhthanh, maquanhuyen, page, perPage) {
    return fetch(
        API +
        LAY_DANH_SACH_SAN_BONG_THEO_DIA_PHUONG +
        builtPage("page", page == null ? 1 : page) +
        builtParam("per_page", perPage == null ? 1 : perPage) +
        builtParam("ma_tinh_thanh", matinhthanh) +
        builtParam("ma_quan_huyen", maquanhuyen),
    )
        .then(response => {
            console.log(response);
            if (response.status == 200) {
                return response.json();
            } else {
                return null;
            }
        })
        .then(data => {
            return data.result;
        })
        .catch((err) => {
            return err;
        })
}

export function API_SAN_BONG_THEO_TINH_THANH(matinhthanh, page, perPage) {
    return fetch(
        API +
        LAY_DANH_SACH_SAN_BONG_THEO_DIA_PHUONG +
        builtPage("page", page == null ? 1 : page) +
        builtParam("per_page", perPage == null ? 5 : perPage) +
        builtParam("ma_tinh_thanh", matinhthanh) +
        {
            method: "GET",
            headers: getHeaders()
        }
    )
        .then(response => {
            console.log(response);
            if (response.status == 200) {
                return response.json();
            } else {
                return null
            }
        })
        .then(data => {
            return data.result;
        })
        .catch((err) => {
            return err;
        })
}

export async function API_SAN_BONG_BANG_GIA(id) {
    return fetch(
        API + LAY_BANG_GIA_LICH_THUE_MO_RONG + id + builtPage("expand", "bang_gia")
    )
        .then(response => {
            if (response.status == 200) {
                return response.json();
            }
        })
        .then(data => {
            return data.result;
        })
        .catch(error => {
            return error;
        });
}

export function API_SAN_BONG_LICH_THUE(id) {
    return fetch(
        API +
        LAY_BANG_GIA_LICH_THUE_MO_RONG +
        id +
        builtPage("expand", "lich_thue")
    )
        .then(response => {
            console.log("response lich thue", response);
            if (response.status == 200) {
                return response.json();
            } else {
                return response;
            }
        })
        .then(data => {
            console.log("fetchLichThueTheoID", data);
            if (data.status != undefined) {
                return data;
            }
            return data.result;
        })
        .catch(error => console.log(error));
}