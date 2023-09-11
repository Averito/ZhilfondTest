<script lang="ts" setup>
import type { IAppParagraphProps } from './AppParagraph.types'
import { computed } from 'vue'

const props = defineProps<IAppParagraphProps>()

const classes = computed(() => ({
	standard: !props.type || props.type === 'standard',
	secondary: props.type === 'secondary'
}))
</script>

<template>
	<p class="app-paragraph" :class="classes" :style="`font-size: ${fontSize}`">
		<slot />
	</p>
</template>

<style lang="scss" scoped>
.app-paragraph {
	margin: v-bind(margin);
}

.standard {
	font-size: 16px;
	font-weight: 600;
	color: black;
}

.secondary {
	font-size: 14px;
	font-weight: 400;
	color: rgba(118, 120, 125, 1);
}
</style>
