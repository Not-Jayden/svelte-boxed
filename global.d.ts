// Copied from "./node_modules/svelte/types/compiler/interfaces.d.ts"

/**
 * Declares reactive state.
 *
 * Example:
 * ```ts
 * let count = $state(0);
 * ```
 *
 * https://svelte-5-preview.vercel.app/docs/runes#$state
 *
 * @param initial The initial value
 */
declare function $state<T>(initial: T): T;
declare function $state<T>(): T | undefined;
