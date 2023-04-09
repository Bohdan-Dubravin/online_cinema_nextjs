import styles from './layout.module.scss'
import Navigation from './navigation/Navigation'
import Sidebar from './sidebar/Sidebar'

type Props = {
	children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
			{/* <div></div> */}
		</div>
	)
}

export default Layout
