import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useToastify } from 'react-native-toastify';

const ToastComponent = () => {
  const { Toast } = useToastify();

  const handleToast = () => {
    Toast.showToast({ message: 'Hello world', duration: 3000 });
  };

  return (
    <View>
      <TouchableOpacity onPress={handleToast}>
        <View>
          <Text>Click me to Show toast</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ToastComponent;
