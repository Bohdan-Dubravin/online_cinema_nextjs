import Image from 'next/image'
import Link from 'next/link'

import { IWidgetMovie } from '../../MoviesContainer/movie.types'

import styles from './SearchList.module.scss'

type SearchProps = {
	movies: IWidgetMovie[]
}

const SearchList = ({ movies }: SearchProps) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link key={movie._id} href={`/movie/${movie.slug}`}>
						<Image
							src={movie.poster || ''}
							width={50}
							height={50}
							alt={movie.title}
							draggable={false}
						/>
						<span>{movie.title}</span>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Movies not found!</div>
			)}
		</div>
	)
}

export default SearchList
