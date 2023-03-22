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
import type {
  showToastProps,
  ToastThemeProps,
  ToastContextProps,
  ToastType,
} from './interface';

export const ToastContext = createContext<ToastContextProps>({
  Toast: { showToast: () => {} },
});

interface Props {
  children?: ReactNode;
  ToastComponent?: React.ElementType;
  theme?: ToastThemeProps;
}

const ToastProvider = ({ children, ToastComponent, theme }: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [toastMessage, setToastMessage] = useState<string | undefined>('');
  const [isToast, setIsToast] = useState<boolean>(false);
  const [toastType, setToastType] = useState<ToastType>('default');
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

  const showToast = ({
    message,
    duration = 1000,
    type = 'default',
  }: showToastProps) => {
    console.log('gettingCalled');
    setToastDuration(duration);
    setToastMessage(message);
    setToastType(type);
    setIsToast(true);
  };

  return (
    <ToastContext.Provider value={{ Toast: { showToast } }}>
      {children}
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        {ToastComponent ? (
          <ToastComponent message={toastMessage} />
        ) : (
          <Toast message={toastMessage} type={toastType} customTheme={theme} />
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
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});
export const useToastify = () => useContext(ToastContext);
export default ToastProvider;
