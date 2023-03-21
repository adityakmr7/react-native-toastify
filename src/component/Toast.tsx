import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import type { ToastThemeProps, ToastType } from '../base/interface';
import { defaultTheme } from '../base/defaultTheme';

const Toast = ({
  message,
  type = 'default',
  customTheme = defaultTheme,
}: {
  message: string | undefined;
  type: ToastType;
  customTheme?: ToastThemeProps;
}) => {
  const theme = customTheme[type];
  return (
    <View style={[styles.container, { backgroundColor: theme.primary }]}>
      <Text style={[{ color: theme.secondary }]}>{message}</Text>
    </View>
  );
};
Toast.defaultProps = {
  message: 'Toast Goes here',
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cyan',
    width: Dimensions.get('window').width * 0.9,
    minHeight: 40,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default Toast;
