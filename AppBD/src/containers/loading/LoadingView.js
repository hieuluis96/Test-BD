import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Container, Content, Thumbnail } from 'native-base';
import { StatusBar, StyleSheet, Dimensions } from 'react-native';
import { CirclesLoader, PulseLoader, TextLoader, DotsLoader } from 'react-native-indicator';
import { Actions, ActionConst } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');


export class LoadingView extends Component {



    static componentName = 'AppLaucher';

    static propTypes = {
        getLoginStatus: PropTypes.func
    };




    render = () => {
        return (
            <Container>
                <Content
                    style={{ backgroundColor: 'red', flex: 1 }}
                >
                    <Thumbnail
                        style={styles.thumbnail}
                        square
                        resizeMode='center'
                        source={require('../../assets/text.png')}
                    />
                    <Thumbnail
                        style={styles.icon}
                        resizeMode='center'
                        source={require('../../assets/icon.png')}
                    />
                </Content>
                <View
                    style={styles.loading}
                >
                    <DotsLoader
                        size={5}
                        color='#FFF'
                    />
                </View>
            </Container>
        );
    }

    componentDidMount = () => {
        setTimeout(() => {
            Actions.reset('app')
        }, 3000)

    }
}

const styles = StyleSheet.create({
    thumbnail: {
        alignSelf: 'center',
        marginTop: width / 4,
        width: width / 2,
        height: width / 2,
    },
    icon: {
        alignSelf: 'center',
        width: width / 4,
        height: width / 4,
    },
    loading: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: width / 10
    }
});
