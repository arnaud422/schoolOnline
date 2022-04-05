import React, { useState } from 'react';
import axios from'axios'

const Register = () => {
    const [error, setError] = useState('')
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

    const sendData = ()=>{
        if(password === rPassword){
            axios({
                method: 'post',
                url: 'http://localhost:4000/api/user/register',
                data:{
                    email: email,
                    password: password
                }
            }).then(()=>setError('Votre compte a bien été créé !')).catch((err)=>setError('no register'))
        }else{
            setError('Vos mot de passe ne correspondent pas !')
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
            <div>
                <p className='error'>{error}</p>
            </div>
            <input type="submit" onClick={sendData}/>
        </div>
    );
};

export default Register;