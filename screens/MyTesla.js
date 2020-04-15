import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';

import useAuthContext from '../hooks/useAuthContext';

export default function MyTesla() {
  const { signOut } = useAuthContext();

  return (
    <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 50 }}>
      <Text>Signed In!</Text>
      <Button onPress={() => signOut()}>Sign Out</Button>
    </Layout>
  );
}
