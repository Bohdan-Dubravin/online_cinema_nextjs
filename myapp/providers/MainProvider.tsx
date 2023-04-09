import { QueryClient, QueryClientProvider } from 'react-query'

import Layout from '@/components/layout/Layout'

import ReduxToast from './ReduxToast'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ReduxToast />
			<Layout>{children}</Layout>
		</QueryClientProvider>
	)
}
export default MainProvider
