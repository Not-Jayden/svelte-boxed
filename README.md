> [!WARNING]
> There is probably no need to use this library any more as a result of [Svelte 5 changing to become deeply reactive by default](https://github.com/sveltejs/svelte/pull/9739), and allowing directly exporting state values. i.e.
> ```
> export const counter = $state({value});
> ```
> This repository will likely be archived, pending where things land with Svelte 5 and if there is still a use case for it.

# 📦 svelte-boxed

A lightweight utility function for Svelte to create reactive, boxed values with shallow reactivity using [Svelte runes](https://svelte.dev/blog/runes).

Inspired by/stolen from [this tweet](https://twitter.com/Rich_Harris/status/1704889098169709019) by Rich Harris, amongst the other conversations around this utility function in the Svelte Discord server.

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
let settings = boxed({ theme: 'dark', notifications: true });

// ❌ Attempt to modify a property inside the object
settings.value.theme = 'light'; // Does not trigger a re-render

// ✅ Reassign settings.value to trigger a re-render
settings.value = { ...settings.value, theme: 'light' }; // Triggers a re-render
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

The package also exports the following aliases based on your personal naming preference:

```javascript
import { ref, writable } from 'svelte-boxed';

let myRef = ref(10);
let myWritable = writable('Hello');
```

- `ref` and `writable` are both aliases for `boxed`.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
