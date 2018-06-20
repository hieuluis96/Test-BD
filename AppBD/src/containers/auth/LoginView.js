import React, { Component } from 'react';
import { Container, Content, View, Text, Form, Item, Label, Input, Card, CardItem } from 'native-base';
import { AuthButton } from '../../components/button/AuthButton';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
export class LoginView extends Component {

    state = {
        user: "",
        pass: "",
    }

    render() {
        return (
            <Card
            >
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input
                            value={this.state.user}
                            onChangeText={(user) => {
                                this.setState({
                                    user
                                })
                            }}
                        />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input
                            value={this.state.pass}
                            onChangeText={(pass) => {
                                this.setState({
                                    pass
                                })
                            }}
                        />
                    </Item>
                </Form>
                <CardItem>
                    <AuthButton
                        onPress={() => {
                            let accountHasGet = {
                                user: this.state.user,
                                name: this.state.name,
                            }
                            login(accountHasGet)
                                .then((acccount) => {
                                    this.props.login(acccount);
                                })
                                .then((acccount) => {
                                    saveItem(acccount);
                                })
                                .then(() => {
                                    Actions.reset('appHasLogin');
                                }).catch((err) => {
                                    alert(err.toString());
                                })

                        }}
                        title={'ĐĂNG NHẬP'}
                    />
                </CardItem>
            </Card>
        );
    }
}

function login(acccount) {
    console.log(acccount)
    let promise = new Promise((resolve, reject) => {
        if (acccount.user == "" && acccount.user == "") {
            reject("Bạn chưa nhập tên đăng nhập và mật khẩu")
        }
        else if (acccount.user != "admin" && acccount.user != "admin") {
            reject("Truy cập không đúng");
        } else {
            resolve(acccount);
        }
    });
    return promise;
}

async function saveItem({ acccount }) {
    try {
        await AsyncStorage.setItem("acccount", acccount)
    } catch (error) {
        console.error("AsyncStorae error");
    }
}