import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// SECTION Redux
import { connect } from 'react-redux';
import {
	searchLogs,
	clearFilter,
} from '../../actions/logActions';

const SearchBar = ({
	searchLogs,
	filtered,
	clearFilter,
}) => {
	const text = useRef('');

	useEffect(() => {
		if (filtered === null) {
			text.current.value = '';
		}
		// eslint-disable-next-line
	}, []);

	const onChange = (e) => {
		if (text.current.value !== '') {
			searchLogs(text.current.value);
		} else {
			clearFilter();
		}
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
						<i
							className='material-icons'
							onClick={() => {
								text.current.value = '';
								clearFilter();
							}}
						>
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

const mapStateToProps = (state) => ({
	filtered: state.filtered,
});

export default connect(mapStateToProps, {
	searchLogs,
	clearFilter,
})(SearchBar);
