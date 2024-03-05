import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import type { ToastThemeProps, ToastType } from '../base/interface';
import { defaultTheme } from '../base/defaultTheme';

const ToastView = ({
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

ToastView.defaultProps = {
  message: 'Toast Goes here',
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cyan',
    minHeight: 40,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 8,
  },
});

export default ToastView;
