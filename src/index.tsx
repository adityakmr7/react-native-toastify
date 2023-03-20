import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-toastify' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type ToastifyProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'ToastifyView';

export const ToastifyView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<ToastifyProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
