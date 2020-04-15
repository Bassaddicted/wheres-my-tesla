import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useAppState } from '../AppContext';
import { useAuthState } from '../AuthContext';
import Loading from './Loading';
import SignIn from './SignIn';
import MyTesla from './MyTesla';

const MainStack = createStackNavigator();

export default function Routing() {
  const appState = useAppState();
  const authState = useAuthState();

  console.log('Routing Auth State:', authState);
  console.log('Routing App State:', appState);

  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="false">
        {appState.isLoading ? (
          <MainStack.Screen name="Loading" component={Loading} />
        ) : authState.userToken === null ? (
          <MainStack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              animationTypeForReplace: authState.isSignout ? 'pop' : 'push',
            }}
          />
        ) : (
          <MainStack.Screen name="MyTesla" component={MyTesla} />
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
