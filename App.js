import React, { useState } from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping } from '@eva-design/eva';

// import CarLocation from './screens/CarLocation';
import Routing from './screens/Routing';
import { AuthProvider } from './AuthContext';
import { THEMES } from './utilities/constants';

// function SignInScreen({ navigation }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const { signIn } = useContext(AuthContext);

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <TextInput
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Sign in" onPress={() => signIn({ username, password })}>
//         <Text>Sign In</Text>
//       </Button>
//     </View>
//   );
// }

export default function App() {
  const [themeName, setThemeName] = useState('dark');
  const theme = THEMES[themeName].theme;

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        <AuthProvider>
          <Routing />
        </AuthProvider>
      </ApplicationProvider>
    </>
  );
}
