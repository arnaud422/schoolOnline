import React, { useState } from 'react';

const register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rPassword, setRpassword] = useState('')

    const handleInput = (e)=>{
        if(e.target.id === 'email'){
            setEmail(e.target.value)
        }else if(e.target.id === 'password'){
            setPassword(e.target.value)
        }else if(e.target.id === "rpassword"){
            setRpassword(e.target.value)
        }
    }

    return (
        <div className='box-register form'>
            <h1>Register</h1>
            <div>
                <label htmlFor='email'>Adresse mail:</label><br/>
                <input type="email" onChange={handleInput} id='email' placeholder="Entrez votre adresse mail"/>
            </div>

            <div>
                <label htmlFor='password'>Mot de passe:</label><br/>
                <input type="password" onChange={handleInput} id='password' placeholder="Entrez votre mot de passe"/>
            </div>
            <div>
                <label htmlFor='password'>Mot de passe:</label><br/>
                <input type="password" onChange={handleInput} id="rpassword" placeholder="Répétez votre mot de passe"/>
            </div>
            <input type="submit"/>
        </div>
    );
};

export default register;