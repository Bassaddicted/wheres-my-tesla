import React, { useState } from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light, dark } from '@eva-design/eva';
import { StatusBar } from 'react-native';

import Routing from './Routing';
import { AuthProvider } from '../AuthContext';
import { useAppState } from '../AppContext';
import { THEMES } from '../utilities/constants';

export default function Main() {
  const { settings } = useAppState();
  const theme = THEMES[settings.theme].theme;

  return (
    <>
      <StatusBar hidden={true} />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        <AuthProvider>
          <Routing />
        </AuthProvider>
      </ApplicationProvider>
    </>
  );
}
