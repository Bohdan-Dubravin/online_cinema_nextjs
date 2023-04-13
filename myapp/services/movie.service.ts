import { axiosClassic } from 'api/interceptors'
import { getMoviesUrl } from 'config/api.config'

import { IMovie } from '@/shared/types/movie.types'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},

	async getMostPopularMovies() {
		const { data } = await axiosClassic.get<IMovie[]>(getMoviesUrl('/popular'))

		return data
	},
}
