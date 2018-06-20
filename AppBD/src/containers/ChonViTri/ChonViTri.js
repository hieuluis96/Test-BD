import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';
import { Left, Button, Icon, Body, Title, Right, Container, Header, Content, Spinner, ListItem, Item } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { API_VI_TRI } from '../../utils/api';
import { connect } from 'react-redux';
import { chonViTriTinhThanh, chonViTriTinhThanhvaQuanHuyen } from '../../redux/vitri/actions';


function checkQuanHuyen(dataServer) {
    if (dataServer.hasOwnProperty('quan_huyen')) {
        return true
    } else {
        return false;
    }
}

function expandedItem(dataServer, callOut) {
    const { quan_huyen } = dataServer;
    var dsquan_huyen = quan_huyen.map((e) => {
        return (
            <ListItem
                onPress={() => {
                    console.log("== Tỉnh thành đã chọn ==", dataServer.ma_tinh_thanh);
                    console.log("== Quận huyện đã chọn ==", e.ma_quan_huyen);
                    console.log("== Tên Tỉnh Thành", dataServer.ten_tinh_thanh);
                    console.log("== Tên Quận Huyện", e.ten_quan_huyen);
                    // THay đổi state trong redux
                    callOut(dataServer.ma_tinh_thanh, e.ma_quan_huyen, dataServer.ten_tinh_thanh, e.ten_quan_huyen);
                    Actions.pop();
                }}
                key={e.ma_quan_huyen}
            >
                <Text>{e.ten_quan_huyen}</Text>
            </ListItem>
        )
    })
    return dsquan_huyen;
}

function HeaderComponent({ title }) {
    return (
        <Header>
            <Left
                style={{ flex: 1 }}
            >
                <Button
                    transparent
                    onPress={() => {
                        Actions.pop()
                    }}
                >
                    <Icon name={'md-watch'} />
                </Button>
            </Left>
            <Body
                style={{ flex: 1 }}
            >
                <Title>{title.toUpperCase()}</Title>
            </Body>
            <Right
                style={{ flex: 1 }}
            />
        </Header>
    )
}

class ChonViTri extends Component {
    state = {
        dataAPI: "",
        key_lua_chon: false,
    }

    MoRongQuanHuyen = (tinhthanh) => () => {
        if (checkQuanHuyen(tinhthanh)) {
            // Nếu có quận huyện sẽ thay đổi state để expandlist
            this.setState({
                key_lua_chon: tinhthanh.ma_tinh_thanh
            })
        }
    }

    ChiChonTinhThanh = (tinhthanh, props) => () => {
        console.log("== Tỉnh thành chọn để get API ==", tinhthanh.ma_tinh_thanh);
        if (tinhthanh.ma_tinh_thanh != "") {
            this.props.chonTinhThanh(tinhthanh.ma_tinh_thanh, tinhthanh.ten_tinh_thanh);
            Actions.pop();
        } else {
            console.log("Có lỗi xảy ra rồi =((")
        }
    }

    render() {
        if (this.state.dataAPI) {
            const dulieutuserver = this.state.dataAPI;
            const { chonTinhThanh } = this.props;
            return (
                <Container>
                    <HeaderComponent
                        title={'chọn vị trí'}
                    />
                    <Content>
                        {dulieutuserver.map((tinhthanh) => {
                            console.log("tinhthanh", tinhthanh)
                            return (
                                <View
                                    key={tinhthanh + "View"}
                                >
                                    <ListItem
                                        onPress={this.ChiChonTinhThanh(tinhthanh)}
                                        key={tinhthanh.ma_tinh_thanh}
                                    >
                                        <Left>
                                            <Text>{tinhthanh.ten_tinh_thanh}</Text>
                                        </Left>
                                        <Right>
                                            {/* Khi chọn sẽ ra expand */}
                                            <Button
                                                onPress={this.MoRongQuanHuyen(tinhthanh)}
                                            >
                                                <Icon name="arrow-forward" />
                                            </Button>

                                        </Right>
                                    </ListItem>
                                    {/* Kiểm tra state thay đổi để mở rộng quận huyện */}
                                    {this.state.key_lua_chon == tinhthanh.ma_tinh_thanh ?
                                        expandedItem(tinhthanh, this.props.chonTinhThanhvaQuanHuyen)
                                        :
                                        null
                                    }
                                </View>
                            )
                        })}

                    </Content>
                </Container>
            )
        }
        // Nếu ko trả về app sẽ xoay
        return (
            <Container>
                <HeaderComponent
                    title={'chọn vị trí'}
                />
                <Spinner />
            </Container>
        );
    }

    async componentDidMount() {
        try {
            let api = await API_VI_TRI()
            if (api) {
                this.setState({
                    dataAPI: api
                })
            }

        } catch (error) {
            console.log("Mất mạng rồi", error);
        }
    }

}


const mapStateToProps = state => {
    return {
        vitri: state.vitri,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        chonTinhThanh: (matinhthanh, tentinhthanh) => dispatch(chonViTriTinhThanh(matinhthanh, tentinhthanh)),
        chonTinhThanhvaQuanHuyen: (matinhthanh, maquanhuyen, tentinhthanh, tenquanhuyen) => dispatch(chonViTriTinhThanhvaQuanHuyen(matinhthanh, maquanhuyen, tentinhthanh, tenquanhuyen))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChonViTri);
