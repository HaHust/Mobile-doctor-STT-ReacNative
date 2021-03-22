/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './screens/Welcome'
import Login from './screens/Login'
import Dashboard from './screens/Dashboard'
const Stack = createStackNavigator();
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/pictures/back.png')}
    />
  );
}
const App = () => {
  const [user, setUser] = useState(null)
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {user ? 
          (<Stack.Screen
            name="dash"
            component={Dashboard} />) :
          (
            <><Stack.Screen
              options={{ headerShown: false }}
              name="home"
              component={Welcome} />
              <Stack.Screen
                options={{
                  headerBackImage: () => (<Image style={{ width: 30, height: 30 }} source={require('./assets/pictures/back.png')} />),
                  headerStyle: { elevation: 0, borderBottomColor: '#FFF', height: 75 },
                  headerTitle: false,
                  headerLeftContainerStyle: {
                    alignContent: 'center',
                    marginLeft: 15,
                    marginTop: 20,
                  }
                }}
                name="Login"
                component={Login} /></>)
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default App;
