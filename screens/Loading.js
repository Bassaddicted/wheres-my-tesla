import React from 'react';
import { Layout, Text, Spinner } from '@ui-kitten/components';

export default function Loading() {
  return (
    <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Spinner size="giant" />
      <Text>Wheres My Tesla Loading...</Text>
    </Layout>
  );
}
