import React, { createContext, useReducer, useEffect, useContext } from 'react';
import { AsyncStorage } from 'react-native';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        userToken: action.token,
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
    isSignout: false,
    userToken: null,
  });

  // ComponentDidMount
  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      console.log('getUserToken From Local Storage!');

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (err) {
        console.error(err);
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
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
