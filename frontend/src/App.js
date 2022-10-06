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

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route index element={<AuctionsPage />} loader={AuctionsLoader} />
		</Route>
	)
)

function App() {
	return <RouterProvider router={router} />
}

export default App
