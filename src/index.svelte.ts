export type Boxed<T> = {
	get value(): T;
	set value(v: T);
};

/**
 * Wraps a value in a reactive container with shallow reactivity. It provides a `.value` property
 * for accessing and modifying the value.
 *
 * Important note: Reactivity is only triggered when the `.value` property is set to a new value,
 * not for changes to object properties or array elements inside the value.
 * e.g.
 * ```ts
 * let counter = boxed({ count: 0 });
 * counter.value.count++; // This will not trigger a re-render.
 * counter.value = { count: counter.value.count + 1 }; // This will trigger a re-render.
 * ```
 *
 * @param initialValue - The initial value to wrap.
 */
export function boxed<T>(initialValue: T): Boxed<T> {
	let _value = $state(initialValue);

	return {
		get value() {
			return _value;
		},
		set value(v) {
			_value = v;
		},
	};
}

export { boxed as ref, boxed as writable };
export type { Boxed as Ref, Boxed as Writable };
