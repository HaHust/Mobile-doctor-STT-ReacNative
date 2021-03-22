import React from 'react';
import { createAppContainer,} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import Dashboard from '../screens/Dashboard'
import Brower from '../screens/Brower'

import { theme } from '../constants'

const screens = createStackNavigator({
    Welcome,
    Login,
    Dashboard,
    Brower
},{
    
})