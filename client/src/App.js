import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

// SECTION Components
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

// SECTION Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
	useEffect(() => {
		// Init Materialize
		M.AutoInit();
	});

	return (
		<Provider store={store}>
			<>
				<SearchBar />
				<div className='container'>
					<AddBtn />
					<AddLogModal />
					<EditLogModal />
					<Logs />
					<AddTechModal />
					<TechListModal />
				</div>
			</>
		</Provider>
	);
}

export default App;
