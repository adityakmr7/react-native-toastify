import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { ToastProvider } from 'react-native-toastify';
import ToastComponent from './ToastComponent';
export const theme: any = {
  error: {
    primary: '#00000',
    secondary: '#fff',
  },
  success: {
    primary: '#2e7d32',
    secondary: '#fff',
  },
  warning: {
    primary: '#ff9800',
    secondary: '#fff',
  },
  default: {
    primary: '#000000',
    secondary: '#fff',
  },
};

export default function App() {
  return (
    <ToastProvider theme={theme}>
      <View style={styles.container}>
        <ToastComponent />
      </View>
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
