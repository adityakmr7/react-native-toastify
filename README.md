# react-native-toastify

- This library is not ready yet. We are still working on it to make it stable

create custom toast

## Installation

```sh
npm install react-native-toastify
```

## Usage

```js
import { ToastProvider } from 'react-native-toastify';

export default function App() {
  return (
    <ToastProvider>
      // Your App Component
    </ToastProvider>
  );
}


// ...

import { useToastify } from 'react-native-toastify';

const ToastComponent = () => {
  const { Toast } = useToastify();

  const handleToast = () => {
    Toast.showToast({ message: 'Hello world', duration: 3000 });
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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
