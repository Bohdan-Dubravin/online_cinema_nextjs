import Heading from '@/components/ui/heading/Heading'
import Slider from '@/components/ui/slider/Slider'

import Meta from '@/utils/meta/Meta'

import { IHome } from './home.types'

const Home = ({ slides }: IHome) => {
	return (
		<Meta title="Watch movies online" description="movie app watch movies">
			<Heading
				title="Watch Movies Online"
				className="text-gray-500 mb-8 text-xl"
			/>
			{slides && slides.length && <Slider slides={slides} />}
		</Meta>
	)
}

export default Home
