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

export interface ThemeType {
  primary: string;
  secondary: string;
}
export interface ThemeProps {
  default: ThemeType;
  error: ThemeType;
  success: ThemeType;
  warning: ThemeType;
}
