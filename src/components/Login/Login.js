import React, { useState } from 'react';
import './Login.css'
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation, Link } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';
import { Button } from 'react-bootstrap';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { FaFacebook, FaUserEdit } from 'react-icons/fa';



function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const fbSignIn = () => {
      handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const signOut = () => {
      handleSignOut()
      .then(res => {
          handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password, user.number)
      .then(res => {
        handleResponse(res, true);
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
        history.replace(from)
      })
    }
    e.preventDefault();
  }



  return (
<>
<div className="container">
  <div className="row">
    <div className="col-md-6">
        <div className="loginInner"> 
          <h4 className="loginTitle">Log In Form</h4>

            <button className="mb-2 new-acount" onClick={() => setNewUser(!newUser)} name="newUser"><FaUserEdit className="new-acount-icon mx-1 " /> Create new acount </button>
          <form  onSubmit={handleSubmit}>
            {newUser &&
              <form method="POST" action="user_login_core.php">
                  <div className="form-box">
                    <label for="InputName"><i className="fas fa-file-signature"></i> Your Name</label>
                    <input name="name" type="text" onBlur={handleBlur} className="form-control" id="InputName" placeholder="Your Name" required=""/>
                  </div>
                  <div className="form-box">
                    <label for="InputPassword1"><i class="fas fa-phone"></i> Phone</label>
                    <input name="number" type="number" onBlur={handleBlur} className="form-control" id="InputNumber" placeholder="+88" required=""/>
                  </div>
                   <div class="form-box">
                    <label for="InputGemder"><i class="fas fa-user"></i> Gender</label>
                    <select className="form-control" name="gender" id="signupgenderselect">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
              </form> 
             } 



              <div className="form-box">
                <label for="InputEmail1"><i class="fas fa-envelope-open-text"></i> Email address</label>
                <input type="email" name="email" onBlur={handleBlur} placeholder="Your Email address" className="form-control" id="InputEmail" required/>
              </div>
              
              <div className="form-box">
                <label for="InputPassword1"><i className="fas fa-key"></i> Password</label>
                <input  type="password" name="password" onBlur={handleBlur} placeholder="Your Password" className="form-control" id="InputPassword"  required/>
              </div>
              {newUser ? "" :
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="Check" required/>
                <label className="form-heckLabel" for="Check">Remember Me</label>
              </div>
              }
              
              <input  className="loginButton"  type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
              {newUser ? '' :
              <div className="loginMeta"> 
                <div className="d-flex flex-row-reverse pt-2 forgetbtn">
                <input type="button" value="Forget Password?"/>
                </div>
              </div>
              }
          </form>
       </div>
    </div>  
    <div className="col-md-6 go-fb-login">
       <div className="go-or-fd-login">
         <div className="d-flex align-items-center flex-column">
          {user.isSignedIn ? <button  onClick={signOut}>Sign Out</button> : <button className="google-signin " onClick={googleSignIn}><AiFillGoogleCircle className="google-icon mx-1" />  Sign In</button>}
      <br/>
      <button className="facebook-signin " onClick={fbSignIn}> <FaFacebook className="facebook-icon mx-1" /> Sign in Facebook</button>
      {user.isSignedIn && <div><p>Welcome, {user.name}!</p><p>Your email: {user.email}</p><img src={user.photo} alt=""/> </div>}
      </div>
      </div>     
     
    </div>
  </div>
</div>
</>
  );
}

export default Login;




