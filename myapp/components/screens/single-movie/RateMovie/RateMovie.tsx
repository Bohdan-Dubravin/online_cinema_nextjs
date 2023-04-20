import { FC } from 'react'
import Ratings from 'react-ratings-declarative'

import AuthButton from '@/components/ui/video-player/AuthPlaceholder/AuthButton'

import { useAuth } from '@/hooks/useAuth'

import styles from './RateMovie.module.scss'
import { useRateMovie } from './useRateMovie'

const RateMovie: FC<{ slug: string; _id: string }> = ({ slug, _id }) => {
	const { user } = useAuth()
	const { handleClick, isSended, rating } = useRateMovie(_id)

	return (
		<div className={styles.wrapper}>
			<h3>How do you like the movie?</h3>
			<p>Ratings improve recommendations</p>
			{user ? (
				<>
					{isSended ? (
						<div className={styles.thanks}>Thanks for rating!</div>
					) : (
						<Ratings
							name="star-rating"
							rating={rating}
							changeRating={handleClick}
							emptyStarColor="#4f4f4f"
							widgetRatedColors="red  "
						>
							<Ratings.Widget />
							<Ratings.Widget />
							<Ratings.Widget />
							<Ratings.Widget />
							<Ratings.Widget />
						</Ratings>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}

export default RateMovie
