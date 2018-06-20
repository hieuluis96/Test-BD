import React, { Component } from 'react';
import { Button, View, Text } from 'native-base';
import PropTypes from 'prop-types';

export function AuthButton({ title, color, onPress }) {
    return (
        <Button
            full
            onPress={onPress}
            style={{
                backgroundColor: color
            }}
        >
            <Text>{title}</Text>
        </Button>
    );
}

AuthButton.proptypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    onPress: PropTypes.func,
}

