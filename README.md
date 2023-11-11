# 📦 svelte-boxed

A lightweight utility function for Svelte to create reactive, boxed values with shallow reactivity using Svelte runes.

## 🚀 Installation

```bash
# Using npm
npm install svelte-boxed

# Using yarn
yarn add svelte-boxed

# Using pnpm
pnpm add svelte-boxed

# Using bun
bun add svelte-boxed
```

## 💡 Usage

The `svelte-boxed` package exports a function `boxed` that wraps a value in a reactive container. This container provides a `.value` property for accessing and modifying the value.

### Importing

```javascript
import { boxed } from 'svelte-boxed';
```

### Basic Example

```javascript
import { boxed } from 'svelte-boxed';

let counter = boxed(0); // initializes a boxed value
counter.value = 5; // updates the value and triggers reactivity
console.log(counter.value); // outputs: 5
```

### Limitations

Remember, reactivity is only triggered when the `.value` property is set to a new value. Changes to object properties or array elements inside the value do not trigger a re-render.

```javascript
let complexCounter = boxed({ count: 0 });

complexCounter.value.count++; // Does not trigger a re-render
complexCounter.value = { count: complexCounter.value.count + 1 }; // Triggers a re-render
```

## 🛠️ API

### `boxed`

- `function boxed<T>(initialValue: T): Boxed<T>`

  Wraps the given initial value in a reactive container.

### `Boxed<T>`

- Type representing a boxed value.

  - Properties:

    - `get value()`: Returns the current value.
    - `set value(v: T)`: Sets a new value and triggers reactivity.

## 🔄 Aliases

The package also exports the following aliases based on your preference:

```javascript
import { ref, writable } from 'svelte-boxed';

let myRef = ref(10);
let myWritable = writable('Hello');
```

- `ref` and `writable` are both aliases for `boxed`.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.