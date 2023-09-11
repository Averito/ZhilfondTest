<script lang="ts" setup>
import defaultAvatar from '@/shared/assets/images/defaultAvatar.svg'
import type { IMainInfoProps } from '@/pages/main/ui/main-info/MainInfo.types'
import AppParagraph from '@/shared/ui/app-paragraph/AppParagraph.vue'
import { useUserStore } from '@/entities/user/store'

defineProps<IMainInfoProps>()

const userStore = useUserStore()
</script>

<template>
	<AppParagraph v-if="userStore.error">{{ userStore.error }}</AppParagraph>
	<div class="main-info-not-selected" v-else-if="!user">
		<AppParagraph type="secondary">Выберите сотрудника, чтобы посмотреть его профиль</AppParagraph>
	</div>
	<div class="main-info" v-else-if="user">
		<img class="main-info-image" width="424px" height="286px" :src="defaultAvatar" alt="Avatar" />
		<div class="main-info-user">
			<AppParagraph font-size="18px" margin="0 0 10px 0">{{ user.name }}</AppParagraph>
			<div class="main-info-property">
				<AppParagraph>Email:</AppParagraph>
				<AppParagraph font-size="16px" type="secondary">{{ user.email }}</AppParagraph>
			</div>
			<div class="main-info-property">
				<AppParagraph>Phone:</AppParagraph>
				<AppParagraph font-size="16px" type="secondary">{{ user.phone }}</AppParagraph>
			</div>
			<AppParagraph font-size="18px" margin="15px 0">О себе:</AppParagraph>
			<AppParagraph type="secondary"
				>{{ user.id }} - {{ user.username }} - {{ user.company.name }}</AppParagraph
			>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.main-info {
	display: flex;
	gap: 50px;
}

.main-info-not-selected {
	display: flex;
	justify-content: center;
	height: 100%;
	align-items: center;
}

.main-info-image {
	width: 424px;
	height: 286px;
	object-fit: cover;
	border: 1px solid rgba(224, 224, 224, 1);
}

.main-info-property {
	display: flex;
	gap: 10px;
	margin-bottom: 10px;
}
</style>
