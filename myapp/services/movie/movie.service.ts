import $axios, { axiosClassic } from 'api/interceptors'
import { getMoviesUrl } from 'config/api.config'

import { IMovie } from '@/shared/types/movie.types'

export const MovieService = {
	async getBySlug(slug: string) {
		return axiosClassic.get<IMovie>(getMoviesUrl(`/slug/${slug}`))
	},

	async getByActor(actorId: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(`/actor/${actorId}`))
	},

	async getByGenres(genreIds: string[]) {
		return axiosClassic.post<IMovie[]>(getMoviesUrl(`/genres`), {
			genreIds,
		})
	},

	async create() {
		return $axios.post<string>(getMoviesUrl(''))
	},

	async updateCountOpened(slug: string) {
		return axiosClassic.post(getMoviesUrl('/update-count-opened'), {
			slug,
		})
	},

	async update(_id: string, data: IMovieEditInput) {
		return $axios.patch<string>(getMoviesUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return $axios.delete<string>(getMoviesUrl(`/${_id}`))
	},

	async getMovies(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getById(_id: string) {
		return $axios.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('/popular')
		)

		return movies
	},
}
