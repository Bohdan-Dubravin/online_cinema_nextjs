import AdminNavItem from './AdminNavItem'
import styles from './AdminNavigation.module.scss'
import { navItems } from './admin-navigation.data'

const AdminNavigation = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navItems.map((item) => (
					<AdminNavItem navItem={item} key={item.link} />
				))}
			</ul>
		</nav>
	)
}

export default AdminNavigation
