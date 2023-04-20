import dynamic from 'next/dynamic'

import FavoriteMovieList from './FavoriteMovieList/FavoriteMovieList'
import PopularMovieList from './PopularMovieList/PopularMovieList'

const MoviesContainer = () => {
	const DynamicFavorites = dynamic(
		() =>
			import(
				'@/components/layout/sidebar/MoviesContainer/FavoriteMovieList/FavoriteMovieList'
			),
		{
			ssr: false,
		}
	)

	return (
		<div>
			<PopularMovieList />
			<DynamicFavorites />
		</div>
	)
}

export default MoviesContainer
