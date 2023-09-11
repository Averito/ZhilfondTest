import type { IUserStoreState } from './types'
import { defineStore } from 'pinia'
import { FetchState } from '@/shared/types/fetch-state'
import { api } from '@/shared/api'
import type { IUser } from '@/entities/user/types'

export const useUserStore = defineStore<'users', IUserStoreState>('users', {
	state: () => ({
		users: [],
		getUsersFetchState: FetchState.NOT_FETCHED,
		error: ''
	}),
	getters: {
		searchUsers:
			state =>
			(searchValue: string): IUser[] => {
				if (!searchValue) return state.users

				return state.users.filter(user =>
					searchValue
						.split(',')
						.some(
							value =>
								(value.trim() && user.name.toLowerCase().includes(value.trim().toLowerCase())) ||
								user.id === parseInt(value)
						)
				)
			}
	},
	actions: {
		async getUsers() {
			this.getUsersFetchState = FetchState.PENDING
			const response = await api.getUsers()

			await new Promise(res => setTimeout(() => res(1), 1500))

			if (response.status !== 200) {
				this.getUsersFetchState = FetchState.ERROR
				this.error = (response.data as Error).message

				setTimeout(() => {
					this.getUsersFetchState = FetchState.NOT_FETCHED
				}, 2000)
				return
			}

			this.getUsersFetchState = FetchState.FETCHED

			this.users = response.data as IUser[]
		}
	}
})
