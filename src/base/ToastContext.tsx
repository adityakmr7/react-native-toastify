import React, {
  createContext,
  type MutableRefObject,
  ReactNode,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Animated, StyleSheet } from 'react-native';
import type {
  showToastProps,
  ToastContextProps,
  ToastThemeProps,
  ToastType,
} from './interface';
import ToastView from '../component/ToastView';
import Toast from '../Toast/Toast';

export const ToastContext = createContext<ToastContextProps>({
  Toast: { showToast: () => {} },
});

interface Props {
  children?: ReactNode;
  ToastComponent?: React.ElementType;
  theme?: ToastThemeProps;
}
export const toastStack: null[] = [];
export interface ToastRefType extends MutableRefObject<{}> {
  showToast?: ({ message, duration, type }: showToastProps) => void;
}

const ToastProvider = ({ children, ToastComponent, theme }: Props) => {
  const ref = useRef<ToastRefType | any>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(10)).current;
  const [toastMessage, setToastMessage] = useState<string | undefined>('');
  const [isToast, setIsToast] = useState<boolean>(false);
  const [toastType, setToastType] = useState<ToastType>('default');
  const [toastDuration, setToastDuration] = useState<number>(1000);
  React.useEffect(() => {
    if (isToast) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    } else if (!isToast) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 10,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isToast, fadeAnim, translateYAnim]);

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
    setToastDuration(duration);
    setToastMessage(message);
    setToastType(type);
    setIsToast(true);
  };

  useImperativeHandle(
    ref,
    // @ts-ignore
    () => {
      return {
        showToast: ({
          message,
          duration = 1000,
          type = 'default',
        }: showToastProps) => {
          setToastDuration(duration);
          setToastMessage(message);
          setToastType(type);
          setIsToast(true);
        },
      };
    },
    []
  );
  useEffect(() => {
    const { current } = ref;
    Toast.pushToStack(current);
    return () => {
      const index = toastStack.indexOf(current);
      if (index !== -1) {
        toastStack.splice(index, 1);
      }
    };
  }, []);
  return (
    <ToastContext.Provider value={{ Toast: { showToast } }}>
      {children}
      <Animated.View
        style={[
          styles.container,
          { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] },
        ]}
      >
        {ToastComponent ? (
          <ToastComponent message={toastMessage} />
        ) : (
          <ToastView
            message={toastMessage}
            type={toastType}
            customTheme={theme}
          />
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
