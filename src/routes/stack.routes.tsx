import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import { Home } from '../pages/Home';
import { Resources } from '../pages/Resources';

const stackRoutes = createStackNavigator();


const AppRoutes: React.FC = (() => (
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >
        <stackRoutes.Screen
            name='Welcome'
            component={Welcome}
        />

        <stackRoutes.Screen
            name='Home'
            component={Home}
        />
       
        <stackRoutes.Screen
            name='Resources'
            component={Resources}
        />

    </stackRoutes.Navigator>
))

export default AppRoutes;