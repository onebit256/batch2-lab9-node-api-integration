import React, { Component } from 'react';
import axios from "axios";
import qs from 'qs';
// import PropTypes from 'prop-types';
// import AuthService from '../services/AuthService';
// import { withRouter } from "react-router-dom";
// import {UserContext} from '../context/currentUser';
const fetch = require("node-fetch");

const API_URL = 'http://127.0.0.1:8000/account/api/signup';

class Signup extends Component {

    constructor(props) {    
        super(props);   
		this.state={
			_name: "",
			email:"",
			password:""
		} 
		
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
    }

	handleChange(event){
		// this.props.history.push('/');
        const target = event.target;
        let email;
        let password;
		let _name;
        if (target.name === "email") {
            email = target.value;
        } else if (target.name === "password") {
            password = target.value;
        } else if (target.name === "_name") {
            _name = target.value;
        }


        if (typeof(password) !== "undefined") {
            this.setState({
                password: password    
            });
        }
        if (typeof(email) !== "undefined") {
            this.setState({
                email: email
            });
        } 
		if (typeof(_name) !== "undefined") {
            this.setState({
                _name: _name
            });
        } 
	}

	async handleSubmit(event){
		event.preventDefault();
       
		let jwt_token;
		const data = qs.stringify({name: this.state._name, email: this.state.email, password: this.state.password});
		const headers = {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			};
		const response = await axios.post(
			API_URL,
			data,
			headers
		).catch(error => {
			console.log(error.response)
		});;
		
		if (typeof(response) !== 'undefined') {
			jwt_token= response.data.token
			// localStorage.setItem("user", JSON.stringify(response.data));
		  }
	
        // if (typeof(jwt_token)!=='undefined') {
        //     this.context.setCurrentUser(jwt_token) 
        //     this.props.history.push('/');
        // }
	}

	render() {
		return (
			
				<body className="login-content">
					<div className="login-panel">
						<form onSubmit={this.handleSubmit}
								>
						<div className="title">XXX区块链后台管理平台<br/>管理员登录</div>
						<input id="name" type="text" name="_name" placeholder="name" onChange={this.handleChange}/>
						<input id="email" type="text" name="email" placeholder="email" onChange={this.handleChange}/>
						<input id="password" type="password" name="password" placeholder="psw" onChange={this.handleChange}/>
						<div></div>
						<input type="checkbox"  value="请输入密码" /><label>记住密码</label>
						<input type="submit" value="submit"/>
						</form>
						<div className="error-info"></div>
					</div>
					
					<script type="text/javascript" src="js/jquery-3.0.0/jquery-3.0.0.min.js"></script>
					
					
					
				</body>
			
			
			);
        }
}


export default Signup;


