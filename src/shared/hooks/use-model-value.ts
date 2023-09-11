import { computed } from 'vue'

export const useModelValue = <T>(
	props: Record<string, any>,
	emit: ReturnType<typeof defineEmits>,
	name = 'modelValue'
) => {
	return computed<T>({
		get: () => props[name] as T,
		set: (value: T) => emit(`update:${name}`, value)
	})
}
