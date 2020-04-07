import React, { useContext } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";

import { AuthContext } from '../App';

export default function CarLocation() {
  // Technically logged in at this point
  
  const {signOut} = useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Car Location Lat: xx.xxxx, lng: xx.xxxx</Text>
      <Button title="Sign out" onPress={signOut}>
        <Text>Sign out</Text>
      </Button>
    </View>
  );
};