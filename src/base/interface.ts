export interface showToastProps {
  message?: string;
  duration?: number;
}
export interface ToastContextProps {
  Toast: {
    showToast: ({ message, duration }: showToastProps) => void;
  };
}
