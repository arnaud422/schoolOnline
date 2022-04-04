import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleInput = (e)=>{
        if(e.target.id === 'email'){
            setEmail(e.target.value)
        }else if(e.target.id === 'password'){
            setPassword(e.target.value)
        }
    }
    return (
        <div className='box-login form'>
            <h1>Login</h1>
            <div>
                <label htmlFor='email'>Adresse mail:</label><br/>
                <input type="email" onChange={handleInput} id="email" placeholder="Entrez votre adresse mail"/>
            </div>
            <div>
                <label htmlFor='password'>Mot de passe:</label><br/>
                <input type="password" onChange={handleInput} id="password" placeholder="Entrez votre mot de passe"/>
            </div>
            <input type="submit"/>
        </div>
    );
};

export default Login;