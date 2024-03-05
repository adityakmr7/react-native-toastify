# react-native-toastify

create custom toast

## Installation

```sh
npm i @adityakmr7/react-native-toastify
```

## Usage

```js
import { ToastProvider } from 'react-native-toastify';

export default function App() {
    return (
        <ToastProvider ToastComponent={CustomToastComponent} theme={customTheme}>
            // Your App Component
        </ToastProvider>
    );
}

```

## Usage inside view component

```js


import { useToastify } from 'react-native-toastify';

const ToastComponent = () => {
    const { Toast } = useToastify();

    const handleToast = () => {
        Toast.showToast({ message: 'Hello world', duration: 3000, type: "default" });
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

```

## Usage outside view component

```js
const handleShowToast = () => {
    Toast.showToast({ message: 'Hello world', duration: 3000, type: "default" });
}
```




## Configuration Props

### `ToastComponent : React.Element`

Toast Component custom style support.

### `theme?: ToastThemeProps`

Pass your toast theme configuration. Default Theme Configuration is below.

Example:

```
export const theme: any = {
  error: {
    primary: '#000000',
    secondary: '#fff',
  },
  success: {
    primary: '#2e7d32',
    secondary: '#fff',
  },
  warning: {
    primary: '#ff9800',
    secondary: '#fff',
  },
  default: {
    primary: '#000000',
    secondary: '#fff',
  },
};

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
