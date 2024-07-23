import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StreamListPage from './pages/StreamListPage'
import CreateStreamPage from './pages/CreateStreamPage'
import MenuAppBar from './components/MenuAppBar'

const App: React.FC = () => {
	return (
		<Router>
			<MenuAppBar />
			<Routes>
				<Route path='/' element={<StreamListPage />} />
				<Route path='/create' element={<CreateStreamPage />} />
			</Routes>
		</Router>
	)
}

export default App
