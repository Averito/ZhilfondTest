import type { IUser } from '@/entities/user/types'
import type { FetchState } from '@/shared/types/fetch-state'

export interface IUserStoreState {
	users: IUser[]
	getUsersFetchState: FetchState
	error: string
}
