import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

// SECTION Components
import Dashboard from './components/Dashboard';
import Navbar from './components/layout/Navbar';

// SECTION Redux
import { Provider } from 'react-redux';
import store from './store';

// SECTION Auth
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import './app.css';

function App() {
	useEffect(() => {
		// Init Materialize
		M.AutoInit();
	});

	return (
		<Provider store={store}>
			<>
				<Router>
					<Navbar />
					{/* Private Route */}
					<Route
						path='/dashboard'
						component={Dashboard}
					/>
					{/* Public Routes */}
					<Route
						path='/register'
						component={Register}
					/>
					<Route
						path='/login'
						component={Login}
					/>
				</Router>
			</>
		</Provider>
	);
}

export default App;
