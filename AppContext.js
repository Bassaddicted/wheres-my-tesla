import React, { createContext, useReducer, useEffect, useContext } from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';

const ApplicationStateContext = createContext();
const ApplicationDispatchContext = createContext();

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'APPLICATION_LOADED':
      return {
        ...state,
        isLoading: false,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, {
    isLoading: true,
    settings: {
      theme: 'dark', // Default theme TODO: Switch to light
    },
  });

  // ComponentDidMount
  useEffect(() => {
    const bootstrapAsync = async () => {
      console.log('bootstrapAsync From App Provider');

      try {
        // This might not be used in the end.. TODO: Remove if not needed
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
      } catch (err) {
        console.error(err);
      }

      dispatch({ type: 'APPLICATION_LOADED' });
    };

    bootstrapAsync();
  }, []);

  return (
    <ApplicationStateContext.Provider value={state}>
      <ApplicationDispatchContext.Provider value={dispatch}>{children}</ApplicationDispatchContext.Provider>
    </ApplicationStateContext.Provider>
  );
};

const useAppState = () => {
  const context = useContext(ApplicationStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider.');
  }

  return context;
};

const useAppDispatch = () => {
  const context = useContext(ApplicationDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider.');
  }

  return context;
};

export { AppProvider, useAppState, useAppDispatch };
