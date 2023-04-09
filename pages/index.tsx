import Head from 'next/head'

import Home from '@/screens/home/Home'

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main>
				<Home />
			</main>
		</>
	)
}
