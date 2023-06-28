const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleWare = redux.applyMiddleware

const initialState = {
	loading: false,
	users: [],
	error: '',
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUsersRequest = () => {
	return {
		type: FETCH_USERS_REQUEST
	}
}

const fetchUsersSuccess = (users) => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: users,
	}
}

const fetchUsersFail = (error) => {
	return {
		type: FETCH_USERS_FAILED,
		payload: error,
	}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUEST:
			return {
				...state,
				loading: true,
			}
		case FETCH_USERS_SUCCESS:
			return {
				loading: false,
				users: action.payload,
				error: '',
			}
		case FETCH_USERS_FAILED:
			return {
				loading: false,
				users: [],
				error: action.payload,
			}
		default:
			break;
	}
}

const fetchUsers = () => {
	return function (dispatch) {
		dispatch(fetchUsersRequest())
		axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
			console.log('here -- 1');
			const users = response.data.map((user) => user.id);
			dispatch(fetchUsersSuccess(users))
		}).catch(error => {
			console.log('here -- 2');
			dispatch(fetchUsersFail(error.message));
		})
	}
}

const store = createStore(reducer, applyMiddleWare(thunkMiddleware));
const unsubscribe = store.subscribe(() => { console.log(store.getState()) });
store.dispatch(fetchUsers())
// unsubscribe();