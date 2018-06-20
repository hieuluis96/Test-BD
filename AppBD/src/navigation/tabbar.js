import React from 'react';
import { Scene } from "react-native-router-flux";
import TrangChu from "../containers/TrangChu/TrangChu";
import About from "../containers/About/About";
import ThongBao from "../containers/ThongBao/ThongBao";
import TimKiemSan from "../containers/TimKiemSan/TimKiemSan";
import { Icon } from 'native-base';
import { TabIcon } from '../components/ui/TabIcon';
import ChonViTri from '../containers/ChonViTri/ChonViTri';

const TabDefault = (
    <Scene key='tabbar' tabs tabBarPosition='bottom' showLabel={false} >
        <Scene
            initial
            hideNavBar
            icon={({ focused }) => (<TabIcon icon={'md-home'} focused={focused} />)}
            key='trangchu'
            component={TrangChu}
        />
        <Scene
            key='timkiemsan'
            component={TimKiemSan}
            hideNavBar
            icon={({ focused }) => (<TabIcon icon={'md-search'} focused={focused} />)}
        />
        <Scene
            key='thongbao'
            hideNavBar
            icon={({ focused }) => (<TabIcon icon={'md-notifications'} focused={focused} />)}
            component={ThongBao}
        />

        <Scene
            key='about'
            hideNavBar
            icon={({ focused }) => (<TabIcon icon={'md-person'} focused={focused} />)}
            component={About}
        />
    </Scene>
)

const TabSignIn = (
    <Scene key='tabbarSignIn' tabs tabBarPosition='bottom' showLabel={false} initial >
            <Scene
                initial
                hideNavBar
                icon={({ focused }) => (<TabIcon icon={'md-home'} focused={focused} />)}
                key='trangchu'
                component={TrangChu}
            />
        <Scene
            key='timkiemsan'
            component={TimKiemSan}
            hideNavBar
            icon={({ focused }) => (<TabIcon icon={'md-search'} focused={focused} />)}
        />
        <Scene
            key='thongbao'
            hideNavBar
            icon={({ focused }) => (<TabIcon icon={'md-notifications'} focused={focused} />)}
            component={ThongBao}
        />

        <Scene
            key='about'
            hideNavBar
            icon={({ focused }) => (<TabIcon icon={'md-person'} focused={focused} />)}
            component={About}
        />
    </Scene>
)




export {
    TabDefault,
    TabSignIn,
}