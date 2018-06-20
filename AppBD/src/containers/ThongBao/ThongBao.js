import React, { Component } from 'react';
import { Container, Content, Header, Left, Button, View, Text, Icon, Body, Title, Right, Tab } from 'native-base';
import { Actions } from 'react-native-router-flux';

function HeaderTab() {
    return (
        <Header hasTabs>
            <Left>
                <Button
                    onPress={() => Actions.drawerOpen()}
                >
                    <Icon name={'md-menu'} />
                </Button>
            </Left>
            <Body>
                <Title>{Actions.currentScene}</Title>
            </Body>
            <Right>
            </Right>
        </Header>
    )
}


export default class ThongBao extends Component {
    render() {
        return (
            <Container>
                <HeaderTab />
                <Content>
                </Content>
            </Container>
        );
    }
}
