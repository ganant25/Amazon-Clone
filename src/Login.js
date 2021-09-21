import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='data:image/jpeg;base64,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' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                   
                </p>

                <button onClick={register} className='login__registerButton'>Create your kaleyra Account</button>
            </div>
        </div>
    )
}

export default Login
