import React from 'react';

const login = () => {
    return (
        <div className='box-register'>
            <input type="email" placeholder="Entrez votre adresse mail"/>
            <input type="password" placeholder="Entrez votre mot de passe"/>
            <input type="submit"/>
        </div>
    );
};

export default login;