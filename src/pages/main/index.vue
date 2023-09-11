<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useUserStore } from '@/entities/user/store'
import UserCard from '@/widgets/user-card/UserCard.vue'
import AppMainLayout from '@/shared/ui/app-layouts/app-main-layout/AppMainLayout.vue'
import type { IUser } from '@/entities/user/types'
import AppParagraph from '@/shared/ui/app-paragraph/AppParagraph.vue'
import AppInput from '@/shared/ui/app-input/AppInput.vue'
import MainInfo from '@/pages/main/ui/main-info/MainInfo.vue'
import { FetchState } from '@/shared/types/fetch-state'
import AppLoader from '@/shared/ui/app-loader/AppLoader.vue'

const userStore = useUserStore()

onMounted(() => {
	userStore.getUsers()
})

const selectedUser = ref<IUser | null>(null)
const searchValue = ref('')

const border = computed(() =>
	selectedUser.value ? '1px solid rgba(224, 224, 224, 1)' : ' 1px solid transparent'
)
const users = computed<IUser[]>(() => userStore.searchUsers(searchValue.value))
const usersPending = computed(() => userStore.getUsersFetchState === FetchState.PENDING)

const onClickUserCard = (user: IUser) => {
	selectedUser.value = user
}
</script>

<template>
	<AppMainLayout>
		<div class="wrapper">
			<div class="block1">
				<AppParagraph margin="0 0 14px 0">Поиск сотрудников</AppParagraph>
				<AppInput
					v-model="searchValue"
					placeholder="Введите id или имя, можно через запятую"
					width="300px"
				/>
				<AppParagraph margin="29px 0 14px 0">Результаты</AppParagraph>
				<div class="loader" v-if="usersPending">
					<AppLoader />
				</div>
				<div class="user-cards" v-else-if="users.length">
					<UserCard v-for="user in users" :user="user" :key="user.id" @click="onClickUserCard" />
				</div>
				<AppParagraph type="secondary" v-else>ничего не найдено</AppParagraph>
			</div>
			<div class="block2">
				<MainInfo :user="selectedUser" />
			</div>
		</div>
	</AppMainLayout>
</template>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	max-height: calc(100vh - 178px);
}

.block1 {
	flex: 1 1 15%;
	padding: 30px 20px;
	border-right: v-bind(border);
}

.loader {
	display: flex;
	justify-content: center;
}

.user-cards {
	max-height: calc(100% - 153px);
	overflow: hidden auto;

	> div:not(:last-of-type) {
		margin-bottom: 10px;
	}

	&::-webkit-scrollbar {
		display: block;
	}
}

.block2 {
	flex: 1 1 85%;
	padding: 30px 20px;
}
</style>
