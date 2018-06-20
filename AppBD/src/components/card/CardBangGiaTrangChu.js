import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { connect } from 'react-redux';
import { Grid, Row, Spinner, Col } from 'native-base';
import { getBangGiaSanTrangChu } from '../../redux/banggia/action';



// Xử lí table Heading
function TableHeading({ params }) {
    const tabHead = ["Khung Giờ", "Thứ 2 - Thứ 6", "Thứ 7 -CN"]
    let tableheading = tabHead.map((e, i) => {
        return (
            <Row
                key={i + " heading"}
                style={{
                    borderColor: 'black',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    justifyContent: 'center'
                }}
            >
                <Text>{e}</Text>
            </Row>
        )
    })
    return tableheading;
}

function TableContent({ params }) {
    const tabHead = ["6h- 11h", "700.000 VNĐ", "800.000 VNĐ"]
    let tableContent = tabHead.map((e, i) => {
        return (
            <Row
                key={i + " row"}
                style={{
                    borderColor: 'black',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    justifyContent: 'center'
                }}
            >
                <Text>{e}</Text>
            </Row>
        )
    })
    return tableContent;
}

// Các props sẽ truyền vào đây gồm có :
// sanbongid


export class CardBangGiaTrangChu extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <Text>Dịch Vụ</Text>
                    </Col>
                </Row>
                <Row>
                    <TableHeading />
                </Row>
                <Row>
                    <TableContent />
                </Row>
                <Row>
                    <TableContent />
                </Row>
            </Grid >
        )
    }
}





