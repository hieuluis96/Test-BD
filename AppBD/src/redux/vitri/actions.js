
export function chonViTriTinhThanh(matinhthanh, tentinhthanh) {
    return {
        type: "CHON_TINH_THANH",
        matinhthanh,
        tentinhthanh
    }
}

export function chonViTriTinhThanhvaQuanHuyen(matinhthanh, maquanhuyen, tentinhthanh, tenquanhuyen) {
    return {
        type: "CHON_TINH_THANH_VA_QUAN_HUYEN",
        matinhthanh,
        maquanhuyen,
        tentinhthanh,
        tenquanhuyen,
    }
}


