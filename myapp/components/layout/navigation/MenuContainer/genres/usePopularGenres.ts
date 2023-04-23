import { getGenreUrl } from 'config/url.config'
import { useQuery } from 'react-query'

import { GenreService } from '@/services/genre.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

import { IMenuItem } from '../menu.types'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genres menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre): IMenuItem => ({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name,
						})
					)
					.splice(0, 4)
					.filter((g) => g.title),
			onError(error) {
				toastError(error, 'Popular genres menu')
			},
		}
	)

	return queryData
}
