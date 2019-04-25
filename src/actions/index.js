// actions
const CHANGE_INTERVAL = 'CHANGE_INTERVAL';

// action creators
const actionChangeInterval = (value) => (dispatch) => {
	dispatch({
		type: CHANGE_INTERVAL,
		payload: value,
	});
};

export {
	actionChangeInterval
};