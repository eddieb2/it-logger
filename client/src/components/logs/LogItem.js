import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min.js';

// SECTION Redux
import { connect } from 'react-redux';
import {
	deleteLog,
	setCurrent,
} from '../../actions/logActions';

const LogItem = ({ log, deleteLog, setCurrent }) => {
	const onDelete = () => {
		deleteLog(log._id);
		M.toast({ html: 'Log Deleted!' });
	};

	return (
		<li className='collection-item'>
			<div>
				<a
					href='#edit-log-modal'
					className={`modal-trigger ${
						log.attention
							? 'red-text'
							: 'blue-text'
					}`}
					onClick={() => setCurrent(log)}
				>
					{log.message}
				</a>
				<br />
				<span className='grey-text'>
					<span className='black-text'>
						ID #{log._id}
					</span>{' '}
					last updated by{' '}
					<span className='black-text'>
						{log.tech}
					</span>{' '}
					on{' '}
					<Moment format='MMMM Do YYYY, h:mm:ss a'>
						{log.date}
					</Moment>
				</span>
				<a href='#!' className='secondary-content'>
					<i
						className='material-icons grey-text'
						onClick={onDelete}
					>
						delete
					</i>
				</a>
			</div>
		</li>
	);
};

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
	deleteLog: PropTypes.func.isRequired,
	setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(
	LogItem
);
