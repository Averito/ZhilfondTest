import axios from 'axios'
import type { AxiosResponse } from 'axios'
import type { IUser } from '@/entities/user/types'

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL
})

export const api = {
	async getUsers(): Promise<AxiosResponse<IUser[] | Error>> {
		return axiosInstance.get<IUser[] | Error>(`/users`)
	}
}
