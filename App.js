import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApplicationProvider, IconRegistry, Layout } from "@ui-kitten/components"
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping, light, dark } from "@eva-design/eva";

// import CarLocation from './screens/CarLocation';
import SplashScreen from './screens/SplashScreen';
import { AuthProvider } from './AuthContext';

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

// const Stack = createStackNavigator();
const themes = {
  light: {
    theme: light,
    icon: "sun",
    text: "LIGHT",
  },
  dark: {
    theme: dark,
    icon: "moon",
    text: "DARK",
  },
};

export default function App() {
  const [themeName, setThemeName] = useState('dark');
  const theme = themes[themeName].theme;

  return (
    <>  
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        
        <AuthProvider>
          <SplashScreen />

          {/* <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#000000"
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold"
              },
              headerShown: false
            }}
          >
            <Stack.Screen name="Splash" component={SplashScreen} />
            {state.isLoading ? (
              <Stack.Screen name="Splash" component={SplashScreen} />
            ) : state.userToken == null ? (
              <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                  title: "Sign In",
                  // When logging out, a pop animation feels intuitive
                  // You can remove this if you want the default 'push' animation
                  animationTypeForReplace: state.isSignout ? "pop" : "push"
                }}
              />
            ) : (
              <Stack.Screen
                name="CarLocation"
                component={CarLocation}
                options={{
                  title: "Car Location"
                }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer> */}

        </AuthProvider>
      </ApplicationProvider>
    </>
  );
};