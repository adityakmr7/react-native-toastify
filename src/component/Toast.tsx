import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const Toast = ({ message }: { message: string | undefined }) => {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
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
