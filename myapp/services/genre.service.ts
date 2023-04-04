import { axiosClassic } from 'api/interceptors'
import { getGenresUrl } from 'config/api.config'

import { IGenre } from '@/shared/types/movie.types'

export const GenreService = {
	async getPopularGenres(limit = 4) {
		return axiosClassic.get<IGenre[]>(getGenresUrl('/popular'), {
			params: { limit },
		})
	},
}
