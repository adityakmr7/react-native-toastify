import type { ToastRefType } from '../base/ToastContext';
import type { ToastType } from 'react-native-toastify';

class Toast {
  static stack: ToastRefType[] = [];

  static pushToStack(toastRef: ToastRefType) {
    this.stack.push(toastRef);
  }
  static showToast({
    message,
    duration,
    type = 'default',
  }: {
    message: string;
    duration?: number;
    type?: ToastType;
  }) {
    if (Toast.stack.length > 0) {
      const ref = Toast.stack[Toast.stack.length - 1];
      // @ts-ignore
      if (ref && ref.showToast) {
        // @ts-ignore
        ref.showToast({
          message,
          duration,
          type,
        });
      }
    }
  }
}

export default Toast;
