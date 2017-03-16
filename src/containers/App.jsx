import React , {Component} from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { About, Home, DeskTop, Register, Login, User } from './index.js'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers/reducer.js'

var initState = {
	todo: {
		list: []
	},
	login: false
}

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(
	thunk,
	logger
)(createStore)

let store = createStoreWithMiddleware(reducer, initState)

class App extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<Provider store={store}>
				<div>
		            <Router history={ browserHistory }>
		              <Route path="/" component={ DeskTop }>  
		                <IndexRoute component={ Home }/>  
		                <Route path="/user/:username" component={ User }/>
		                <Route path="/about" component={ About }/>  
		              </Route>  
		              <Route path="/register" component={ Register }/>   
		              <Route path="/login" component={ Login }/>
		            </Router>  
	          </div>
          </Provider> 
		)
	}
}

export default App