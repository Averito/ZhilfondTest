<script lang="ts" setup>
import type { IAppInputProps } from './AppInput.types'
import { useModelValue } from '@/shared/hooks/use-model-value'
import { computed } from 'vue'

const props = defineProps<IAppInputProps>()
const emit = defineEmits(['update:modelValue'])

const value = useModelValue<string>(props, emit)

const width = computed(() => props.width || '100%')
</script>

<template>
	<input class="app-input" type="text" v-model="value" :placeholder="placeholder" />
</template>

<style lang="scss" scoped>
.app-input {
	border-radius: 8px;
	font-size: 14px;
	background-color: white;
	border: 1.5px solid rgba(233, 236, 239, 1);
	padding: 15px 20px;
	width: v-bind(width);

	&:focus {
		outline: none;
	}
}
</style>
