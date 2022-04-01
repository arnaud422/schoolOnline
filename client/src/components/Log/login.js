import React from 'react';

const login = () => {
    return (
        <div className='box-login form'>
            <h1>Login</h1>
            <div>
                <label htmlFor='email'>Adresse mail:</label><br/>
                <input type="email" id="email" placeholder="Entrez votre adresse mail"/>
            </div>
            <div>
                <label htmlFor='password'>Mot de passe:</label><br/>
                <input type="password" id="password" placeholder="Entrez votre mot de passe"/>
            </div>
            <input type="submit"/>
        </div>
    );
};

export default login;