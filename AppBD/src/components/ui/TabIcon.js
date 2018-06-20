import { Icon } from "native-base";
import PropTypes from 'prop-types';
import React, { Component } from 'react';


import AppColor from '../../theme/AppColor';


export const TabIcon = ({ icon, focused }) => {
    return (
        <Icon
            name={icon}
            style={{ color: focused ? AppColor.tabIcon.focused : AppColor.tabIcon.blur }}
        />
    )
};
