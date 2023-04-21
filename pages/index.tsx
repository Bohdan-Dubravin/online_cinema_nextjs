import { errorCatch } from 'api/api.helpers'
import { getActorUrl, getMovieUrl } from 'config/url.config'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import Home from '@/screens/home/Home'

import { IHome } from '@/components/screens/home/home.types'
import { ISlide } from '@/components/ui/slider/slider.types'

import { ActorService } from '@/services/actor/actor.service'
import { MovieService } from '@/services/movie.service'

import { getGenresList } from '@/utils/movie/getGengesList'

export default function HomePage(props: IHome) {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main>
				<Home {...props} />
			</main>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		const { data: dataActors } = await ActorService.getAll()
		const datatTrendingMovies = await MovieService.getMostPopularMovies()

		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			subTitle: getGenresList(m.genres),
			title: m.title,
			bigPoster: m.bigPoster,
		}))

		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((a) => ({
			name: a.name,
			posterPath: a.photo,
			url: getActorUrl(a.slug),
			content: {
				title: a.name,
				subTitle: `+${a.countMovies} movies`,
			},
		}))

		const trendingMovies: IGalleryItem[] = datatTrendingMovies
			.slice(0, 7)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				url: getMovieUrl(m.slug),
			}))

		return {
			props: {
				actors,
				slides,
				trendingMovies,
			} as IHome,
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			props: {
				actors: [],
				slides: [],
				trendingMovies: [],
			} as IHome,
			revalidate: 60,
		}
	}
}
