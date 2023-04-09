import { titleMerge } from 'config/seo.config'
import Head from 'next/head'


export const MetaNoIndex = ({ title = 'Error' }: { title?: string }) => {
	return (
		<Head>
			<title>{titleMerge(title)}</title>
			<meta name="robots" content="noindex, nofollow" />
		</Head>
	)
}
