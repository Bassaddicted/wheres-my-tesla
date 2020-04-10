import { useAuthDispatch } from '../AuthContext';

const useAuthContext = () => {
  const dispatch = useAuthDispatch();

  async function signIn(data) {
    console.log('Signing In!!!');
    // Create Axios / Fetch / native-networking call to get user Token from Tesla.

    dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
  }

  function signOut() {
    console.log('Signing Out!!!');

    dispatch({ type: 'SIGN_OUT' });
  }

  return {
    signIn,
    signOut,
  };
};

export default useAuthContext;
