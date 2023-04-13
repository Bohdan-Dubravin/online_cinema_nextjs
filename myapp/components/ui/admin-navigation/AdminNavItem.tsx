import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'


import styles from './AdminNavigation.module.scss'
import { INavItem } from './admin-navigation.interface'

const AdminNavItem = ({ navItem }: { navItem: INavItem }) => {
	const { asPath } = useRouter()

	return (
		<li>
			<Link
				className={cn({ [styles.active]: asPath === navItem.link })}
				href={navItem.link}
			>
				{navItem.title}
			</Link>
		</li>
	)
}

export default AdminNavItem
