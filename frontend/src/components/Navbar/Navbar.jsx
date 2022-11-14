import { List, Cart } from 'react-bootstrap-icons'
import logo from './auctioneer.png'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

export default function NavBar() {
	return (
		<>
			<div className={styles.nav}>
				<List className={styles.list} size={36} />
				
				<div className={styles.logo}>
					<Link to='/'>
					<img src={logo} className={styles.img} alt='logo' />
					</Link>
					<h3 className={styles.logoHeader}>Auctioneer</h3>
				
				</div>
				

				<Cart className={styles.cart} size={36} />
			</div>
		</>
	)
}
