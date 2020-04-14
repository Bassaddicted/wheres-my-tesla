import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuthState } from '../AuthContext';
import Loading from './Loading';
import SignIn from './SignIn';
import Main from './Main';

const MainStack = createStackNavigator();

export default function Routing() {
  const state = useAuthState();

  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="false">
        {state.isLoading ? (
          <MainStack.Screen name="Loading" component={Loading} />
        ) : state.userToken === null ? (
          <MainStack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            }}
          />
        ) : (
          <>
            <MainStack.Screen name="Main" component={Main} />

            {/* Should have Settings Stack with all scrollable view. */}
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
