import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { ToastProvider } from 'react-native-toastify';
import CustomToast from './CustomToast';
import ToastComponent from './ToastComponent';

export default function App() {
  return (
    <ToastProvider ToastComponent={CustomToast}>
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
