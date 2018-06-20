import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { connect } from 'react-redux';
import { LoadingView } from './LoadingView'

function mapStateToProps(state) {
    return {
        ...state,
    }
}


function mapDispatchToProps(dispatch) {
    return {

    }
}


export default connect(mapStateToProps)(LoadingView);