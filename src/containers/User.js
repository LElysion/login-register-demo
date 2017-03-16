import React, { Component } from 'react'
/*
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
*/

class User extends Component {
	constructor(props) {
		super(props)
		var defaultState = {
			user :{
				username: ""
			}
		}
		this.state = defaultState
	}

	componentWillMount(){
	}

	render(){
		return (
			<div>
				<h2>hi,{this.props.params.username}</h2>
			</div>
		)
	}
}

export default User