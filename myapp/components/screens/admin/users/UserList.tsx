import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { useUsers } from './useUsers'

const UserList = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers()

	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title="Users" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				tableItems={data || []}
				headerItems={['Email', 'Date register']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default UserList
