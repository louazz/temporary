import axios from "axios";
import './App.css';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
function App() {
	const [name, setName] = useState("");
	const [password, setpassword] = useState("");
	const history = useHistory();

	function handlechange_name(event){
      setName(event.target.value)
	}
	function handlechange_password(event){
		setpassword(event.target.value)
	  }
	  function handlechange_submit(event){
		axios.get(`http://localhost:1337/owners`)
		.then(res => {
		  var check= false;
		 for (var i in res.data){
			 console.log(res.data[i].name+" "+ res.data[i].pass)
			 if (res.data[i].name==name && res.data[i].pass==password){
				history.push('/itemlist');
				check=true;
			 }
		
		 }
		 if(check==false){
			 alert("wrong credentials")
		 }
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

	    <a class = "right-align" href="/signup">Sign Up</a>

	    <br/>

		<div class="container-log-btn">
          <button name = "btn_submit" class="log-form-btn" onClick={handlechange_submit}>
            <span>Log In</span>
          </button>
        </div>

	</div>

	

</div>
  );
}

export default App;
