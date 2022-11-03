import { Outlet } from 'react-router-dom'
import NavBar from '../components/Navbar/Navbar'

export default function RootLayout() {
	return (
		<>
			<NavBar />
			<main>
				<Outlet />
			</main>
		</>
	)
}
