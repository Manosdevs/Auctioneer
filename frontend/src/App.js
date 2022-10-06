import './App.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from 'react-router-dom'

import RootLayout from './pages/RootLayout'
import AuctionsPage, { loader as AuctionsLoader } from './pages/AuctionsPage'
import AuctionDetailPage, {
	loader as AuctionDetailLoader,
} from './pages/AuctionDetailPage'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route index element={<AuctionsPage />} loader={AuctionsLoader} />
			<Route
				path=':id'
				element={<AuctionDetailPage />}
				loader={AuctionDetailLoader}
			/>
		</Route>
	)
)

function App() {
	return <RouterProvider router={router} />
}

export default App
