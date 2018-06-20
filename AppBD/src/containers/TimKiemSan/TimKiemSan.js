import React, { Component } from 'react';
import { Container, Content, Header, Left, Button, Icon, Body, Title, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';

function HeaderTab() {
  return (
    <Header>
      <Left>
        <Button
          transparent
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

export default class TimKiemSan extends Component {
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
