import FavoriteMovieList from './FavoriteMovieList/FavoriteMovieList'
import PopularMovieList from './PopularMovieList/PopularMovieList'

const MoviesContainer = () => {
	return (
		<div>
			<PopularMovieList />
			<FavoriteMovieList />
		</div>
	)
}

export default MoviesContainer
