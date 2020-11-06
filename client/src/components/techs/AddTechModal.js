import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';

// SECTION Redux
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions';

const AddTechModal = ({ addTech }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	// SECTION Helpers
	const onSubmit = () => {
		if (firstName === '' || lastName === '') {
			M.toast({
				html: 'Please enter first and last name!',
			});
		} else {
			const newTech = {
				firstName,
				lastName,
			};

			addTech(newTech);
			M.toast({
				html: `${firstName} ${lastName} was added as a tech!`,
			});
			// Clear Fields
			setFirstName('');
			setLastName('');
		}
	};

	return (
		<div id='add-tech-modal' className='modal'>
			<div className='modal-content'>
				<h4>New Technician</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='firstName'
							value={firstName}
							onChange={(e) =>
								setFirstName(
									e.target.value
								)
							}
						/>
						<label
							htmlFor='firstName'
							className='active'
						>
							First Name
						</label>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='lastName'
							value={lastName}
							onChange={(e) =>
								setLastName(e.target.value)
							}
						/>
						<label
							htmlFor='lastName'
							className='active'
						>
							Last Name
						</label>
					</div>
				</div>
			</div>
			<div className='modal-footer'>
				<a
					href='#!'
					onClick={onSubmit}
					className='modal-close deep-orange lighten-2 waves-effect waves-light btn'
					style={{ marginRight: '20px' }}
				>
					Enter
				</a>
			</div>
		</div>
	);
};

AddTechModal.propTypes = {
	addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
