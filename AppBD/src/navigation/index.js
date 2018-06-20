import React from 'react';
import { Scene, Router } from "react-native-router-flux";
import LoadingContainer from "../containers/loading/LoadingContainer";
import { TabDefault, TabSignIn } from './tabbar';
import ChonViTri from '../containers/ChonViTri/ChonViTri';
import BanDo from '../containers/BanDo/BanDo';


const router = () => {
    return (
        <Router>
            <Scene
            hideNavBar
            >
                <Scene
                    key='splash'
                    component={LoadingContainer}
                />
                <Scene key='app' type='reset' >
                    {TabDefault}
                </Scene>
                <Scene
                    key='CHON_VI_TRI'
                    component={ChonViTri}
                    title='Chọn Vị Trí'
                />
                <Scene key='appHasLogin' type='reset' >
                    {TabSignIn}
                </Scene>
            </Scene>
        </Router>
    )
}

export default router;