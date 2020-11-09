import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	DELETE_LOG,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_LOG,
	SEARCH_LOGS,
	CLEAR_FILTER,
	CLEAR_LOGS,
} from './types';

export const getLogs = () => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch('api/logs');
		const data = await res.json();

		dispatch({
			type: GET_LOGS,
			payload: data.logs,
		});
	} catch (error) {
		dispatch({
			type: LOGS_ERROR,
			payload: error,
		});
	}
};

export const addLog = (log) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('api/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await res.json();

		dispatch({
			type: ADD_LOG,
			payload: data.log,
		});
	} catch (error) {
		dispatch({
			type: LOGS_ERROR,
			payload: error,
		});
	}
};

export const deleteLog = (id) => async (dispatch) => {
	try {
		setLoading();

		await fetch(`api/logs/${id}`, {
			method: 'DELETE',
		});

		dispatch({
			type: DELETE_LOG,
			payload: id,
		});
	} catch (error) {
		dispatch({
			type: LOGS_ERROR,
			payload: error,
		});
	}
};

export const updateLog = (log) => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch(`api/logs/${log._id}`, {
			method: 'PUT',
			body: JSON.stringify({
				attention: log.attention,
				message: log.message,
				tech: log.tech,
				date: log.date,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await res.json();

		dispatch({
			type: UPDATE_LOG,
			payload: data.log,
		});
	} catch (error) {
		dispatch({
			type: LOGS_ERROR,
			payload: error,
		});
	}
};

export const searchLogs = (text) => async (dispatch) => {
	try {
		setLoading();

		dispatch({
			type: SEARCH_LOGS,
			payload: text,
		});
	} catch (error) {
		dispatch({
			type: LOGS_ERROR,
			payload: error,
		});
	}
};

export const setCurrent = (log) => {
	return {
		type: SET_CURRENT,
		payload: log,
	};
};

export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT,
	};
};

export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};

// Clear Filter
export const clearFilter = () => {
	return {
		type: CLEAR_FILTER,
	};
};

// NOTE GET LOGS Example
// export const getLogs = () => {
// 	return async (dispatch, getState) => {
// 		setLoading();
// 		const res = await fetch('/logs');
// 		const data = await res.json();

// 		dispatch({
// 			type: GET_LOGS,
// 			payload: data,
// 		});
// 	};
// };
