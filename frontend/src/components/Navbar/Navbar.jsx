import { List, Hammer } from 'react-bootstrap-icons'
import logo from './auctioneer.png'

import styles from './Navbar.module.css'

export default function NavBar() {
	return (
		<>
			<div className={styles.nav}>
				<List className={styles.list} size={36} />
				<div className={styles.logo}>
					<img src={logo} className={styles.img} alt='logo' />
					<h3 className={styles.logoHeader}>Auctioneer</h3>
				</div>

				<Hammer className={styles.hammer} size={36} />
			</div>
		</>
	)
}
