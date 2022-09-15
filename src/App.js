import { Routes, Route, Link } from "react-router-dom"
import { Application } from "./pages/Stocks"
import { Favorites } from "./pages/Favorites"
import { Deals } from "./pages/Deals"
import { Header } from "./components/Application/Header/Header"
import { Filter } from "./components/Application/Filter/Filter"
import "./App.css"

function App() {
	return (
		<div className='App'>
			<div className='Header'>
				<Header />
			</div>
			<div className='Filter'>
				<Filter />
			</div>
			<Routes>
				<Route path='/' element={<Application />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='/deals' element={<Deals />} />
			</Routes>
		</div>
	)
}

export default App
