import $axios, { axiosClassic } from 'api/interceptors'
import { getActorsUrl } from 'config/api.config'

import { IActorEditInput } from '@/components/screens/admin/actor/actor-edit.interface'

import { IActor } from '@/shared/types/movie.types'

export const ActorService = {
	async getBySlug(slug: string) {
		return axiosClassic.get<IActor>(getActorsUrl(`/by-slug/${slug}`))
	},

	async create() {
		return $axios.post<string>(getActorsUrl(''))
	},

	async update(_id: string, data: IActorEditInput) {
		return $axios.patch<string>(getActorsUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return $axios.delete<string>(getActorsUrl(`/${_id}`))
	},

	async getAll(searchTerm?: string) {
		return axiosClassic.get<IActor[]>(getActorsUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getById(_id: string) {
		return $axios.get<IActorEditInput>(getActorsUrl(`/${_id}`))
	},
}
