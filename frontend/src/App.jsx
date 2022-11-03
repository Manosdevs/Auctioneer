import './App.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/Navbar/Navbar'
import { AuctionsPage } from './pages/AuctionsPage'

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path='/' element={<AuctionsPage />} />
			</Routes>
		</Router>
	)
}

export default App
