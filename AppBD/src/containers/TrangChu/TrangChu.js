import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, ToastAndroid } from 'react-native';
import { Header, Left, Button, Icon, Container, Body, Right, Title, Content, Spinner, Card, Subtitle } from 'native-base';
import { Actions } from 'react-native-router-flux';
import CardSan from '../../components/card/CardSan';
import { connect } from 'react-redux';
import { API_SAN_BONG_THEO_TINH_THANH, API_SAN_BONG_THEO_QUAN_HUYEN_TINH_THANH } from '../../utils/api';
import { getDuLieuSanCoQuanHuyen, getDuLieuSanCoTinhThanh } from '../../redux/danhsachsan/action';
import { getBangGiaSanTrangChu } from '../../redux/banggia/action';
import Modal from 'react-native-modal';
import { CardExpanded } from '../../components/card/CardExpanded';


goChonViTri = () => () => {
    Actions.CHON_VI_TRI();
}

function tachLienHe1(mangDienThoai) {
    if (mangDienThoai == undefined) {
        return null;
    } else {
        for (let index = 0; index < mangDienThoai.length; index++) {
            if (mangDienThoai[index] == undefined) {
                return null
            } else {
                return mangDienThoai[index];
            }
        }
    }
}

function tachLienHe2(mangDienThoai) {
    if (mangDienThoai == undefined) {
        return null;
    } else {
        for (let index = 1; index < mangDienThoai.length; index++) {
            if (mangDienThoai[index] == undefined) {
                return null
            } else {
                return mangDienThoai[index];
            }
        }
    }
}

function HeaderTab({ tentinhthanh, tenquanhuyen }) {
    return (
        <Header>
            <Left />
            <Body
            >
                <Title>{tentinhthanh}</Title>
                <Subtitle>{tenquanhuyen}</Subtitle>
            </Body>
            <Right
            >
                <Button
                    transparent
                    onPress={goChonViTri()}
                >
                    <Icon
                        name="md-locate"
                    />
                </Button>
            </Right>
        </Header >
    )
}

class TrangChu extends Component {
    constructor(props) {
        super(props);
        this.page = 1;
    }


    state = {
        loading: false,
        data: [],
        page: 1,
        seed: 1,
        error: null,
        refreshing: false,
    }


    handleLoadMore = () => {
        if (this.props.danhsachsan.isFetching) {
            this.page = this.page + 1;
            console.log("trang tiếp theo", this.page);
            this.props.getDuLieuSanCoQuanHuyen(this.props.vitri.matinhthanh, this.props.vitri.maquanhuyen, this.page);

        }
    }

    renderFooter = () => {
        if (!this.props.danhsachsan.isFetching) return null;
        return (
            <Spinner size="large" />
        );
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.vitri.maquanhuyen != this.props.vitri.maquanhuyen) {
            this.props.getDuLieuSanCoQuanHuyen(nextProps.vitri.matinhthanh, nextProps.vitri.maquanhuyen);
        }

        if (nextProps.vitri.matinhthanh != this.props.vitri.matinhthanh) {
            this.props.getDuLieuSanCoTinhThanh(nextProps.vitri.matinhthanh);
        }
    }

    renderItem = (item) => {
        return (
            <CardSan
                sanbongid={item.san_bong_id}
                partnerid={item.partner_id}
                tensan={item.ten_san_bong}
                diachi={item.dia_chi}
                dienthoai={tachLienHe1(item.lien_he)}
                didong={tachLienHe2(item.lien_he)}
            />
        )
    }

    renderFooter = () => {
        if (!this.state.loading) return null;

        return (
            <Spinner size={"small"} />
        );
    };

    render() {
        const { danhsachsan, vitri } = this.props;
        const { data, error, isFetching } = danhsachsan;
        const { tenquanhuyen, tentinhthanh } = vitri;

        if (isFetching == true) {
            return (
                <Container>
                    <HeaderTab
                        tentinhthanh={tentinhthanh}
                        tenquanhuyen={tenquanhuyen}
                    />
                    <Spinner />
                </Container>
            )
        }

        if (error != null) {
            return (
                <Container>
                    <HeaderTab
                        tentinhthanh={tentinhthanh}
                        tenquanhuyen={tenquanhuyen}
                    />
                    <Content>
                        {
                            ToastAndroid.show(
                                'Mất kết nối mạng rồi',
                                ToastAndroid.SHORT,
                                ToastAndroid.CENTER
                            )
                        }
                    </Content>
                </Container >
            )
        }

        return (
            <Container>
                <HeaderTab
                    tentinhthanh={tentinhthanh}
                    tenquanhuyen={tenquanhuyen}
                />
                <Content>
                    <FlatList
                        keyExtractor={(item, index) => { return index.toString() }}
                        data={data}
                        renderItem={({ item }) => this.renderItem(item)}
                        onEndReachedThreshold={0.7}
                        onEndReached={this.handleLoadMore.bind(this)}
                    />
                </Content>
            </Container>
        )
    }




    componentDidMount() {
        const { matinhthanh, maquanhuyen } = this.props.vitri;
        this.props.getDuLieuSanCoQuanHuyen(matinhthanh, maquanhuyen);
    }
}


const mapStateToProps = state => {
    console.log("dữ liệu prop globe TrangChu", state);
    return {
        danhsachsan: state.danhsachsan,
        vitri: state.vitri,
        banggia: state.banggia,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDuLieuSanCoQuanHuyen: (matinhthanh, maquanhuyen, page, perPage) => {
            dispatch(getDuLieuSanCoQuanHuyen(matinhthanh, maquanhuyen, page, perPage))
        },
        getDuLieuSanCoTinhThanh: (matinhthanh) => {
            dispatch(getDuLieuSanCoTinhThanh(matinhthanh))
        },
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TrangChu);
