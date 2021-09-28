import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator()

function AuthRoutes() {
   return(
      <Navigator
         screenOptions={{
            headerShown: false,
            contentStyle: {
               backgroundColor: 'transparent'
            }
            

         }}
      >
         <Screen
            name='SignIn'
            component={SignIn}
         />
         <Screen
            name='Home'
            component={Home}
         />
      </Navigator>
   )
};

export { AuthRoutes } 