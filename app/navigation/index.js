import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/login-screen/index';
import {DetailsScreen} from '../screens/welcome-screen/index';

const Stack = createStackNavigator();

function Application() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default Application;
