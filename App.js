import React, { useState } from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping } from '@eva-design/eva';

import Routing from './screens/Routing';
import { AuthProvider } from './AuthContext';
import { THEMES } from './utilities/constants';

export default function App() {
  const [themeName, setThemeName] = useState('dark');
  const theme = THEMES[themeName].theme;
  //TODO: On Theme change change <StatusBar /> color type to to it's appropriate color scheme.

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
