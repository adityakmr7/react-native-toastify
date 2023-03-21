import React, {
  ReactNode,
  useContext,
  useState,
  createContext,
  useEffect,
  useRef,
} from 'react';
import { Animated } from 'react-native';
import { StyleSheet } from 'react-native';
import { Toast } from '../component';
import type { showToastProps, ToastContextProps } from './interface';

export const ToastContext = createContext<ToastContextProps>({
  Toast: { showToast: () => {} },
});

interface Props {
  children?: ReactNode;
  ToastComponent?: React.ElementType;
}

const ToastProvider = ({ children, ToastComponent }: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [toastMessage, setToastMessage] = useState<string | undefined>('');
  const [isToast, setIsToast] = useState<boolean>(false);
  const [toastDuration, setToastDuration] = useState<number>(1000);

  React.useEffect(() => {
    if (isToast) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    } else if (!isToast) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [isToast, fadeAnim]);

  useEffect(() => {
    const toasTimer = setInterval(() => {
      setIsToast(false);
    }, toastDuration);
    return () => clearInterval(toasTimer);
  }, [toastDuration]);

  const showToast = ({ message, duration = 1000 }: showToastProps) => {
    setToastDuration(duration);
    setToastMessage(message);
    setIsToast(true);
  };

  return (
    <ToastContext.Provider value={{ Toast: { showToast } }}>
      {children}
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        {ToastComponent ? (
          <ToastComponent message={toastMessage} />
        ) : (
          <Toast message={toastMessage} />
        )}
      </Animated.View>
    </ToastContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 40,
  },
});
export const useToastify = () => useContext(ToastContext);
export default ToastProvider;
