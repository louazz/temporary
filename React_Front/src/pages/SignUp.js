import '../App.css';
import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import axios from "axios";
function SignUp() {
	const history = useHistory();
	const [name, setName] = useState("");
	const [password, setpassword] = useState("");
	function handlechange_name(event){
		setName(event.target.value)
	  }
	  function handlechange_password(event){
		  setpassword(event.target.value)
		}
		function handlechange_submit(){
			axios.post(`http://localhost:1337/owners`, { name: name, pass: password })
			.then(res => {
				history.push('/');
			  
			})
			
		}
  return (
    <div>

	<hgroup>
	    <h2>Welcome back!</h2>
		<p>Please enter your details to sign into your account</p>
	</hgroup>

	<div class = "log-form">

	    <div class="group log-input">
	    	<input type="text" id = "username" name = "username" placeholder = "Username" onChange={handlechange_name}/>
	    </div>

	    <div class="group log-input">
	        <input type="password" id = "password" name = "password"  placeholder = "Password" onChange={handlechange_password}/>
	    </div>

	    <span class="check left-align">
	        <input type="checkbox"/>
	        <label>Remember Me</label>
	    </span>

	    <a class = "right-align" href="/">Sign Up</a>

	    <br/>

		<div class="container-log-btn">
          <button name = "btn_submit" class="log-form-btn" onClick={handlechange_submit}>
            <span>Sign Up</span>
          </button>
        </div>

	</div>

	

</div>
  );
}

export default SignUp;
