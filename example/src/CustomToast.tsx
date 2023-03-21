import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window');

const CustomToast = ({ message }: { message: string }) => {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
};

CustomToast.defaultProps = {
  message: 'Hello world',
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: width * 0.9,
    marginHorizontal: 16,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
export default CustomToast;
