import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

// SECTION Redux
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';

const TechItem = ({
	tech: { _id, firstName, lastName },
	deleteTech,
}) => {
	const onDelete = () => {
		deleteTech(_id);
		M.toast({ html: 'Tech successfully deleted!' });
	};

	return (
		<li className='collection-item'>
			<div>
				{firstName} {lastName}
				<a
					href='#!'
					className='secondary-content'
					onClick={onDelete}
				>
					<i className='material-icons grey-text'>
						delete
					</i>
				</a>
			</div>
		</li>
	);
};

TechItem.propTypes = {
	tech: PropTypes.object.isRequired,
	deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
