<script lang="ts" setup>
import defaultAvatar from '@/shared/assets/images/defaultAvatar.svg'
import type { IUserCardProps } from '@/widgets/user-card/UserCard.types'

const props = defineProps<IUserCardProps>()
const emit = defineEmits(['click'])

const onClickLocal = (event: MouseEvent) => {
	emit('click', props.user, event)
}
</script>

<template>
	<div class="user-card" @click="onClickLocal">
		<img :src="defaultAvatar" width="70" height="70" alt="Avatar" />
		<div class="user-data">
			<p class="user-name">{{ user.name }}</p>
			<p class="user-email">{{ user.email }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.user-card {
	display: flex;
	border: 1px solid #e0e0e0;
	border-radius: 8px;
	background: white;
	cursor: pointer;
	overflow: hidden;
}

.user-data {
	padding: 13px;
	background-color: white;
	transition: background-color 0.3s ease;
	width: 100%;

	&:hover {
		background-color: #e0e0e0;
	}
}

.user-name {
	font-weight: 600;
	color: black;
}
.user-email {
	font-weight: 400;
	color: #76787d;
}

.user-name,
.user-email {
	font-size: 14px;
}
</style>
