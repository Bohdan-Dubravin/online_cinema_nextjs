import { useFavorites } from '@/components/screens/favorites/useFavorites'
import SkeletonLoader from '@/components/ui/SkeletonLoader'

import { useAuth } from '@/hooks/useAuth'

import MovieList from '../MovieList'

import NotAuthFavorites from './NotAuthFavorites'

const FavoriteMovieList = () => {
	const { isLoading, favoritesMovies } = useFavorites()
	const { user } = useAuth()

	if (!user) return <NotAuthFavorites />

	if (!favoritesMovies?.length) {
		return (
			<h3 className="text-white mt-4 text-[20px]">Not found favorite movies</h3>
		)
	}

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			list={{
				link: '/favorites',
				movies: favoritesMovies?.slice(0, 3) || [],
				title: 'Favorites',
			}}
		/>
	)
}

export default FavoriteMovieList
