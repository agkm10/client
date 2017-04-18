
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const initialState = {
			isAuth: false
};

export default function loginDuck( state = initialState, action ) {
	switch ( action.type ) {
		case LOGIN:
			console.log('login Ran')
			return Object.assign({},state, {isAuth: true})
		case LOGOUT:
			console.log('logout ran')
			return Object.assign({},state, {isAuth: false})
		default: return state;
	}
}

export function login() {
	console.log('login function ran')
		return {type: LOGIN}
}

export function logout() {
		return {type: LOGOUT}
}
