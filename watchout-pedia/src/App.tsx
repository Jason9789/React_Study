import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import MovieDetail from './Pages/MovieDetail'
import TvDetail from './Pages/TvDetail'
import TvPage from './Pages/TvPage'

// eslint-disable-next-line react/function-component-definition
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/tv" element={<TvPage />} />
				<Route path="/movie/:id" element={<MovieDetail />} />
				<Route path="/tv/:id" element={<TvDetail />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
