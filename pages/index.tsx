import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'

import Home from '@/screens/home/Home'



const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Home />
			</main>
		</>
	)
}
