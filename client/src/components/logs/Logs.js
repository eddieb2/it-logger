import React, { useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';

// SECTION Redux
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';

const Logs = ({
	log: { logs, loading, filtered },
	getLogs,
}) => {
	useEffect(() => {
		getLogs();
		// eslint-disable-next-line
	}, []);

	if (loading || logs === null) {
		return <Preloader>Loading...</Preloader>;
	}

	return (
		<ul className='collection with-header'>
			<li className='collection-header'>
				<h4 className='center'>System Logs</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className='center'>No logs !</p>
			) : (
				<>
					{filtered !== null
						? filtered.map((log) => (
								<LogItem
									key={log.id}
									log={log}
								/>
						  ))
						: logs.map((log) => (
								<LogItem
									key={log.id}
									log={log}
								/>
						  ))}
				</>
			)}
		</ul>
	);
};

Logs.propTypes = {
	log: PropTypes.object.isRequired,
	getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	log: state.log,
	filtered: state.filtered,
});

export default connect(mapStateToProps, { getLogs })(Logs);
