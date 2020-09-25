import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import {UserContext} from '../App'


//app id 262581634811678
//app secret db20ce6df8b791f941c00b65041327b4
 const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [user, setUser] = useState({
        isSignedIn: false,
        email: '',
        password: ''
    })

  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  if (!firebase.apps.length) {
    firebase.initializeApp();
 }

    const fbBtnLogIn = () => {
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log(user);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    const fbBtnLogOut = () =>{
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }

    const googleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
           
            // The signed-in user info.
           const {displayName, email} = result.user;
           const signedInUser = {name: displayName};
           setLoggedInUser(signedInUser)
            // ...
            console.log(user);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    const googleSignOut = () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    } 

   

    const handleChange = (e) => {
        let isFormValid = true;
        if(e.target.name === 'email'){
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPassValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPassValid && passwordHasNumber;  
        }
        if(isFormValid){
            const newUser = {...user};
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
    }

    const handleSubmit = (event) => {
        console.log(user.email, user.password);
        if(user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ...
              });
        }
        
        event.preventDefault();
    }
   
    
    return (
        <Container style={{margin: '0 auto', width: '570px', height: '591px',
         border: '1px solid black'}}>
            <h1>Create an account</h1>
            <p>email {user.email}</p>
            <p>pass {user.password}</p>
            <Form onClick={handleSubmit}>
                <input onBlur={handleChange}  type="text" placeholder='email' required name='email'/>
                <br/>
                <input onBlur={handleChange} type="password" placeholder='password' required name='password' />
                <br/>
                <input type="text" placeholder='first name'/>
                <br/>
                <input type="text" placeholder='last name'/>
                <br/>
                <input type="submit"/>
            </Form>

            {/* <div  style={{border: '1px solid black', borderRadius: '30px', margin: '10px' }}><img style={{width: '37px', height: '37px', padding: '7px'}} src={require('../travel-guru-master/Icon/fb.png')}></img><a style={{color: 'black'}} href=''>Continue with facebook</a></div>
            <div  onClick={googlebtn} style={{border: '1px solid black', borderRadius: '30px', margin: '10px' }}><img  style={{width: '37px', height: '37px', padding: '7px'}} src={require('../travel-guru-master/Icon/google.png')}></img><a style={{color: 'black'}} href=''>Continue with Google</a></div> */}
            <button onClick={googleSignIn} >google sign In</button>
            <button onClick={googleSignOut}>google Sign Out</button>
            <button onClick={fbBtnLogIn}>fb login</button>
            <button onClick={fbBtnLogOut}>fb Log out</button>
        </Container>
    );
};

export default Login;