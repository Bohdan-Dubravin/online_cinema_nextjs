import axios from 'api/interceptors'
import { getUsersUrl } from 'config/api.config'

import { IProfileInput } from '@/components/screens/profile/profile.interface'

import { IMovie } from '@/shared/types/movie.types'
import { IUser } from '@/shared/types/user.types'

export const UserService = {
	async getProfile() {
		return axios.get<IUser>(getUsersUrl('/profile'))
	},

	async updateProfile(data: IProfileInput) {
		return axios.patch<string>(getUsersUrl('/profile'), data)
	},

	async getUsers(searchTerm?: string) {
		return axios.get<IUser[]>(getUsersUrl(`/users`), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getUser(_id: string) {
		return axios.get<IUser>(getUsersUrl(`/${_id}`))
	},

	async updateUser(_id: string, data: IProfileInput) {
		return axios.patch<string>(getUsersUrl(`/${_id}`), data)
	},

	async deleteUser(_id: string) {
		return axios.delete<string>(getUsersUrl(`/delete/${_id}`))
	},

	async getFavorites() {
		return axios.get<IMovie[]>(getUsersUrl('/user-favorites'))
	},

	async toggleFavorite(movieId: string) {
		return axios.post(getUsersUrl('/profile/favorites'), {
			movieId,
		})
	},
}
