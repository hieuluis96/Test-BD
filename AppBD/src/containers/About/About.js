import React, { Component } from 'react';
import Modal from "react-native-modal";
import { Container, Content, View, Text } from 'native-base';
import { AuthButton } from '../../components/button/AuthButton';
import LoginContainer from '../auth/LoginContainer';
import { connect } from 'react-redux';


class About extends Component {

    state = {
        modalVisible: false
    }


    render() {
        return (
            <Container>
                <Content>
                    <AuthButton
                        title={'Hello'}
                        onPress={() => {
                            this.setState((prevState) => {
                                return {
                                    modalVisible: !prevState.modalVisible

                                }
                            })
                        }}
                    />
                    <Modal
                        onBackButtonPress={() => {
                            this.setState((prevState) => {
                                return {
                                    modalVisible: !prevState.modalVisible
                                }
                            })
                        }}
                        hideModalContentWhileAnimating={true}
                        useNativeDriver={true}
                        isVisible={this.state.modalVisible}
                    >
                        <LoginContainer />
                    </Modal>
                </Content>
            </Container>
        );
    }
}


function mapStateToProps(state) {
    console.log("state", state)
    return {
        auth: state.auth,
    }
}


export default connect(mapStateToProps)(About);
