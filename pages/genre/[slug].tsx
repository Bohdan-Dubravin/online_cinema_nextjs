import { errorCatch } from 'api/api.helpers'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Genre from '@/components/screens/genre/Genre'
import { IGenrePage } from '@/components/screens/genre/genre.types'

import { GenreService } from '@/services/genre/genre.service'
import { MovieService } from '@/services/movie/movie.service'

import Error404 from '../404'

const GenrePage: NextPage<IGenrePage> = ({ movies, genre }) => {
	return genre ? <Genre genre={genre} movies={movies} /> : <Error404 />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await GenreService.getAll()

		const paths = genres.map((g) => ({
			params: { slug: g.slug || '404' },
		}))

		return {
			paths: paths,
			fallback: 'blocking',
		}
	} catch (e) {
		console.log(errorCatch(e))

		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: genre } = await GenreService.getBySlug(String(params?.slug))

		const { data: movies } = await MovieService.getByGenres([genre._id])

		return {
			props: { movies, genre },
			revalidate: 60,
		}
	} catch (e) {
		console.log(errorCatch(e))

		return {
			props: {},
			// notFound: true,
		}
	}
}

export default GenrePage
