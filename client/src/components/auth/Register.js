import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import M from 'materialize-css/dist/js/materialize.min.js';

import '../../app.css';

const Register = () => {
	useEffect(() => {
		// Init Materialize
		M.AutoInit();
	});

	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div
			className='container'
			id='form-size'
			style={{ position: 'relative' }}
		>
			<form
				className='row teal lighten-2 z-depth-4'
				style={{ padding: '1%' }}
			>
				<h4 className='white-text center'>
					Register
				</h4>
				<div className='input-field col s6 offset-m3'>
					<input
						type='email'
						id='email'
						className='validate teal lighten-2 z-depth-5 white-text'
					/>
					<label
						className='white-text'
						htmlFor='email'
					>
						Email
					</label>
				</div>
				<div className='input-field col s6 offset-m3'>
					<input
						type='password'
						id='password1'
						className='validate teal lighten-2 white-text'
					/>
					<label
						className='white-text'
						htmlFor='password1'
					>
						Password
					</label>
				</div>
				<div className='input-field col s6 offset-m3 '>
					<input
						type='password'
						id='password2'
						className='validate teal lighten-2 white-text'
					/>
					<label
						className='white-text'
						htmlFor='password2'
					>
						Confirm Password
					</label>
				</div>
				<button
					class='btn waves-effect waves-light col s4 offset-m4'
					type='submit'
					name='action'
					style={{
						marginBottom: '2%',
						marginTop: '2%',
					}}
				>
					Submit
					<i class='material-icons right'>
						send
					</i>
				</button>
			</form>
		</div>
	);
};

export default Register;
