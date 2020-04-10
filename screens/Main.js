import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';

import useAuthContext from '../hooks/useAuthContext';

export default function Main() {
  const { signOut } = useAuthContext();

  return (
    <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Signed in!</Text>

      <Button onPress={() => signOut()}>Sign Out</Button>
    </Layout>
  );
}
