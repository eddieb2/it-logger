import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// SECTION Redux
import { connect } from 'react-redux';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
	const text = useRef('');
	const onChange = (e) => {
		searchLogs(text.current.value);
	};

	return (
		<nav>
			<div
				className='nav-wrapper deep-orange lighten-2'
				style={{ marginBottom: '30px' }}
			>
				<form>
					<div className='input-field'>
						<input
							id='search'
							type='search'
							placeholder='Search logs...'
							ref={text}
							onChange={onChange}
							required
						/>
						<label
							className='label-icon'
							htmlFor='search'
						>
							<i className='material-icons'>
								search
							</i>
						</label>
						<i className='material-icons'>
							close
						</i>
					</div>
				</form>
			</div>
		</nav>
	);
};

SearchBar.propTypes = {
	searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);
