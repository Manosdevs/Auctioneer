import { List, Hammer } from 'react-bootstrap-icons'
import logo from './auctioneer.png'

import styles from './Navbar.module.css'

export default function NavBar() {
	return (
		<>
			<div className={styles.nav}>
				<List className={styles.hammer} size={36} />
				<div>
					<img src={logo} className={styles.img} alt='logo' />
					Auctioneer
				</div>

				<Hammer className={styles.hammer} size={36} />
			</div>
		</>
	)
}
