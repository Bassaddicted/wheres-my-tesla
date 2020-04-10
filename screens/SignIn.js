import React from 'react';
import { Layout, Text, Input, Button } from '@ui-kitten/components';

import useAuthContext from '../hooks/useAuthContext';

export default function SignIn() {
  const { signIn } = useAuthContext();

  return (
    <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 50 }}>
      <Text>Sign in with your Tesla account:</Text>
      <Input
        // value={value}
        label="Email"
        placeholder=""
        // accessoryRight={renderIcon}
        // captionIcon={AlertIcon}
        // secureTextEntry={secureTextEntry}
        // onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Input
        // value={value}
        label="Password"
        placeholder=""
        // accessoryRight={renderIcon}
        // captionIcon={AlertIcon}
        // secureTextEntry={true}
        // onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Button onPress={() => signIn({ email: 'test', password: 'test' })}>Sign In</Button>
    </Layout>
  );
}
