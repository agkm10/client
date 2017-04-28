const POST_SYSTEM_MESSAGE = 'POST_SYSTEM_MESSAGE';

const initialState = {
check: 'true',
watsonMessage: null
};

export default function messagesDuck( state = initialState, action ) {
	switch ( action.type ) {
		case POST_SYSTEM_MESSAGE:
			return Object.assign({}, state, {watsonMessage: action.message})
		default: return state;
	}
}

export function postSystemWatson(message) {
	return {
		type: POST_SYSTEM_MESSAGE,
		message
	}
}
export function clearSystemWatson() {
	return {
		type: POST_SYSTEM_MESSAGE,
		message: ""
	}
}
