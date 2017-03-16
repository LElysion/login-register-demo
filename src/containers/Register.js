import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addUserAction } from '../actions/action.js'
import { Button, Form, Input, Icon, Checkbox } from 'antd';
import style from '../public/css/register.css'

const FormItem = Form.Item;

class rootRegister extends Component {
	constructor(props) {
		super(props)
		var defaultState = {
			user: {
				username: "",
				password: "",
				passwordagain: "",
				power: "1"
			}
		}
		this.state = defaultState
	}

	componentWillMount(){

	}

	onTextChange(key) {
        return e => {
            var user = this.state.user
            user[key] = e.target.value 
            this.setState({ user })
            //console.log(user)
        }
    }

	handleClick(user) { /*提交处理*/
		console.log(user)
		const { handleSign } = this.props
		if(user.password!=user.passwordagain){
			console.log('not same password'+user.username.length)
			return false
		}else if(user.username.length<4 || user.username.length>12){
			console.log('please input username in 4-12')
			return false
		}else if(user.password.length<4 || user.password.length>12){
			console.log('please input password in 4-12')
			return false
		}else{
			handleSign(user)
		}
	}

	backToHome() {
		browserHistory.push("/")
	}

	render(){
		var user = this.state.user
		return (
			<Form className="login-form login-formp">
				<sapn className="register-line">Register</sapn>
				<FormItem>
				<Input type="text" prefix={<Icon type="user" style={{ fontSize: 13 }} />}
				value={user.username} 
				onChange={this.onTextChange('username').bind(this)} 
				placeholder="Username" 
				style={{width:"220px"}}/>
				</FormItem>

				<FormItem>
				<Input type="password" prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
				value={user.password}  
				onChange={this.onTextChange('password').bind(this)} 
				placeholder="password" 
				style={{width:"220px"}}/>
				</FormItem>

				<FormItem>
				<Input type="password"  prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
				value={user.passwordagain} 
				onChange={this.onTextChange('passwordagain').bind(this)} 
				placeholder="passwordagain" 
				style={{width:"220px"}}/>
				</FormItem>

				<FormItem>
				<Button type="primary" onClick={this.handleClick.bind(this, user)}>signin</Button>
				</FormItem>

				<FormItem>
					<a href="javascript:;" onClick={this.backToHome.bind(this)}>back&nbsp;to&nbsp;home</a>
				</FormItem>
			</Form>
		)
	}
}

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		handleSign: addUserAction
	}, dispatch)
}

let Register = connect(
	mapStateToProps,
	mapDispatchToProps
)(rootRegister)

export default Register