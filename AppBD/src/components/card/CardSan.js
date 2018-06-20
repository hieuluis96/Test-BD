import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import { Card, CardItem, Left, Icon, Body, H2, Right, Grid, Col, Button, Row, Spinner, Item } from 'native-base';
import { AuthButton } from '../button/AuthButton';
import { CardBangGiaTrangChu } from './CardBangGiaTrangChu';
import { getBangGiaSanTrangChu } from '../../redux/banggia/action';
import { connect } from 'react-redux';
import { API_SAN_BONG_BANG_GIA } from '../../utils/api';
import { CardExpanded } from './CardExpanded';
import { resolve, reject } from 'rsvp';


// Hàm mở rộng dữ liệu ở đây 


class CardSan extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        toogleBangGia: false,
        toogleLichThue: false,
        sanbongid: "",
        data: [],
        demIndex: 0,
        dataBangGia: []
    }

    switchBangGia = (sanbongid) => {
        this.setState((prevState) => {
            return {
                toogleBangGia: !prevState.toogleBangGia,
            }
        })

    }
    switchLichThue = () => {
        this.setState((prevState) => {
            return {
                toogleLichThue: !prevState.toogleLichThue,
            }
        })
    }

    closeAction = () => () => {
        this.setState({
            toogleLichThue: false,
            toogleBangGia: false,
        })
    }

    renderComponentBangGia = (sanbongid) => {
        if (this.props.banggia.isFetching == true) {
            return (
                <CardItem>
                    <Spinner />
                </CardItem>
            )
        } else if (this.props.banggia.data && this.props.banggia.data.hasOwnProperty('bang_gia')) {
            return (
                <CardItem>
                    <CardBangGiaTrangChu
                        sanbongid={sanbongid}
                    />
                </CardItem>
            )
        } else {
            return (
                <CardItem>
                    <Text>Không có dữ liệu </Text>
                </CardItem>
            )
        }
    }


    traVeBangGia(param, data) {
        if (param != null) {
            return (
                <Text>Sân này chưa có dữ liệu</Text>
            )
        }
        if (param != null && data != null) {
            return (
                <CardBangGiaTrangChu
                    sanbongid={param}
                    data={data}
                />
            )
        }
        return <Text>Hàm này ko có dữ liệu</Text>
    }


    async getAPIBangGia(sanbongid) {
        try {
            await this.props.getBangGiaSanTrangChu(sanbongid);
            if (this.props.banggia && this.props.banggia.data) {
                if (this.props.banggia.hasOwnProperty('bang_gia')) {
                    let data = this.props.banggia.data.bang_gia;
                    this.traVeBangGia(sanbongid, data)
                }
                this.traVeBangGia(sanbongid)
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const {
            sanbongid,
            partnerid,
            tensan,
            diachi,
            dienthoai,
            didong } = this.props;
        return (
            <Card>
                <CardItem header>
                    <Left>
                        <Body>
                            <H2>{tensan}</H2>
                        </Body>
                    </Left>
                    <Right>
                        <Grid>
                            <Col>
                                <Icon name={'md-person'} />
                            </Col>
                            <Col>
                                <Icon name={'md-person'} />
                            </Col>
                            <Col>
                                <Icon name={'md-person'} />
                            </Col>
                        </Grid>
                    </Right>
                </CardItem>
                <CardItem>
                    <Left>
                        <Icon name={'md-add'} />
                        <Body>
                            <Text>{diachi}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Left>
                        <Icon name={'md-add'} />
                        <Body>
                            <Text>{dienthoai}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Left>
                        <Icon name={'md-add'} />
                        <Body>
                            <Text>{didong}</Text>
                        </Body>
                    </Left>
                </CardItem>
                {/* Thẻ mở rộng */}
                <CardItem>
                    <Grid>
                        <Col>
                            <AuthButton
                                onPress={this.props.openBangGia}
                                title={'Bảng giá'}
                            />
                        </Col>
                        <Col>
                            <AuthButton
                                onPress={this.props.openLichThue}
                                title={'Lịch thuê'}
                            />
                        </Col>
                    </Grid>
                </CardItem>
            </Card>
        )
    }

    componentDidMount() {

    }


}


function DuLieuBangGia(sanbongid) {
    return (
        <Text>{sanbongid}</Text>
    )
}


const mapStateToProps = state => {
    console.log("state bang gia", state);
    return {
        banggia: state.banggia
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBangGiaSanTrangChu: (sanbongid) => {
            dispatch(getBangGiaSanTrangChu(sanbongid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardSan);

