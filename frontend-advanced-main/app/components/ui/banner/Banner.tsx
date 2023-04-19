import Image from 'next/image'
import { FC } from 'react'

import styles from './Banner.module.scss'

interface IBanner {
	imagePath: string
	Detail?: FC | null
}

const Banner = ({ imagePath, Detail }: IBanner) => {
	return (
		<div className={styles.banner}>
			<Image
				alt="image"
				src={imagePath}
				draggable={false}
				fill
				className="image-like-bg object-top"
				priority
				unoptimized
			/>
			{Detail && <Detail />}
		</div>
	)
}

export default Banner
