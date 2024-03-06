import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Toast } from 'react-native-toastify';

const handleToastOutside = () => {
  Toast.showToast({ message: 'Hello world', duration: 3000 });
};
const ToastComponent = () => {
  // const { Toast } = useToastify();

  const handleToast = () => {
    handleToastOutside(); // Trigger from outside the component
    // Trigger from inside the component
    // Toast.showToast({ message: 'Hello world', duration: 3000 });
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
