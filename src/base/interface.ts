export type ToastType = 'default' | 'success' | 'error' | 'warning';
export interface showToastProps {
  message?: string;
  duration?: number;
  type?: ToastType;
}
export interface ToastContextProps {
  Toast: {
    showToast: ({ message, duration }: showToastProps) => void;
  };
}

export interface ToastThemeType {
  primary: string;
  secondary: string;
}
export interface ToastThemeProps {
  default: ToastThemeType;
  error: ToastThemeType;
  success: ToastThemeType;
  warning: ToastThemeType;
}
