import React, { Component } from 'react'
import { Link } from 'react-router'
import style from '../public/css/desktop.css'
import { Menu, Icon, Button } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { notLogin } from '../actions/action.js'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
/*

*/

class rootDeskTop extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount(){

	}
	handleEsc(login) { /*提交处理*/
		console.log(login)
		const { escnow } = this.props
		escnow()
	}
	render(){
		const { login } = this.props
		return (
			<div>
				<Menu mode="horizontal" className="navlink">
					<Menu.Item><Link to='/' className="navlink">home</Link></Menu.Item>
					<Menu.Item><Link to='/about' className="navlink">about</Link></Menu.Item>
					<Menu.Item><Link to='/user/you' className="navlink">user</Link></Menu.Item>
				</Menu>
				<div className="login">
					<Button style={{marginRight:"12px"}} className={login?"hide":"new"}>
						<Link to='/login'>
							login
						</Link>
					</Button>
					<Button className={login?"hide":"new"}>
						<Link to='/register'>
							register
						</Link>
					</Button>
					<Button style={{marginRight:"12px"}} className={login?"new":"hide"} onClick={this.handleEsc.bind(this,login)}>
						<Link to='/login'>
							esc
						</Link>
					</Button>
				</div>
				{ this.props.children }
			</div> 
		)
	}
}

function mapStateToProps(state) { 
    return {
        login: state.login
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
      escnow:notLogin
    }, dispatch)
}

let DeskTop = connect(
    mapStateToProps,
    mapDispatchToProps
)(rootDeskTop)

export default  DeskTop