import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuthState } from '../AuthContext';
import Loading from './Loading';
import SignIn from './SignIn';
import Main from './Main';

const Stack = createStackNavigator();

export default function Routing() {
  const state = useAuthState();

  // Implement Navigation

  return (
    <>
      {state.isLoading ? (
        <Loading />
      ) : state.userToken === null ? (
        <SignIn />
      ) : (
        // <Stack.Screen
        //   name="SignIn"
        //   component={SignInScreen}
        //   options={{
        //     title: 'Sign In',
        //     // When logging out, a pop animation feels intuitive
        //     // You can remove this if you want the default 'push' animation
        //     animationTypeForReplace: state.isSignout ? 'pop' : 'push',
        //   }}
        // />
        // <Stack.Screen
        //   name="CarLocation"
        //   component={CarLocation}
        //   options={{
        //     title: 'Car Location',
        //   }}
        // />
        <Main />
      )}
    </>
  );
}
