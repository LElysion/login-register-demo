import { combineReducers } from 'redux'
import * as actions from '../actions/action.js'

function Reducer(state, action){
	switch(action.type) {
		case actions.add:
			return Object.assign({}, state, { todo: action.todo })
		case actions.islogin:
			return Object.assign({}, state, { login: action.login })
		default: 
			return state
	}
}

export default Reducer