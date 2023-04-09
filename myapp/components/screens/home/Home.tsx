import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const Home = () => {
	return (
		<Meta title="Watch movies online" description="movie app watch movies">
			<Heading
				title="Watch Movies Online"
				className="text-gray-500 mb-8 text-xl"
			/>
		</Meta>
	)
}

export default Home
