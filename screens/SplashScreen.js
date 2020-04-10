import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { useAuthState, useAuthDispatch } from '../AuthContext';

export default function SplashScreen() {
  const state = useAuthState();
  const dispatch = useAuthDispatch();

  console.log(state);

  // Loading > SignIn > DefaultAppScreen

  return (
    <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading Application...</Text>
    </Layout>
  );
}
