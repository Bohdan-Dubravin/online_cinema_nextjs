import $axios, { axiosClassic } from 'api/interceptors'
import { getGenresUrl } from 'config/api.config'

import { IGenreEditInput } from '@/components/screens/admin/genre/genre-edit.interface'

import { IGenre } from '@/shared/types/movie.types'

export const GenreService = {
	async getBySlug(slug: string) {
		return axiosClassic.get<IGenre>(getGenresUrl(`/slug/${slug}`))
	},

	async create() {
		return $axios.post<string>(getGenresUrl(''))
	},

	async update(_id: string, data: IGenreEditInput) {
		return $axios.patch<string>(getGenresUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return $axios.delete<string>(getGenresUrl(`/${_id}`))
	},

	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getCollections() {
		return axiosClassic.get<ICollectio[]>(getGenresUrl('/collections'))
	},

	async getById(_id: string) {
		return $axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
	},

	async getPopularGenres(limit: number = 4) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(`/popular`), {
			params: {
				limit,
			},
		})
	},
}
