import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'

import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import Statistics from './Statistics/Statistics'

const Admin = () => {
	return (
		<Meta title="Admin panel">
			<AdminNavigation />
			<Heading title="Some statistics" />

			<Statistics />
		</Meta>
	)
}

export default Admin
