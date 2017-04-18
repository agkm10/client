
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const initialState = {
			isAuth: false
};

export default function loginDuck( state = initialState, action ) {
	switch ( action.type ) {

		case LOGIN:
			return Object.assign({},state, {isAuth: true})
		case LOGOUT:
			return Object.assign({},state, {isAuth: false})
		default: return state;
	}
}

export function login() {
		return {type: LOGIN}
}

export function logout() {
		return {type: LOGOUT}
}
