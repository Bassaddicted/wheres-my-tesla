import React, { createContext, useReducer, useEffect, useContext } from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'APP_LOAD_RESTORE_TOKEN':
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...state,
        userToken: action.token,
        isSignout: false,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        userToken: null,
        isSignout: true,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  // ComponentDidMount
  // Load Assets required for the application
  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      console.log('bootstrapAsync');

      try {
        userToken = await AsyncStorage.getItem('userToken');

        // This might not be used in the end.. TODO: Remove if not needed
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
      } catch (err) {
        console.error(err);
      }

      dispatch({ type: 'APP_LOAD_RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider.');
  }

  return context;
};

const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider.');
  }

  return context;
};

export { AuthProvider, useAuthState, useAuthDispatch };
