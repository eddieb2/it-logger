import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

// SECTION Components
import SearchBar from './layout/SearchBar';
import Logs from './logs/Logs';
import AddBtn from './layout/AddBtn';
import AddLogModal from './logs/AddLogModal';
import EditLogModal from './logs/EditLogModal';
import AddTechModal from './techs/AddTechModal';
import TechListModal from './techs/TechListModal';

// SECTION Redux

const Dashboard = () => {
	return (
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
	);
};

export default Dashboard;
