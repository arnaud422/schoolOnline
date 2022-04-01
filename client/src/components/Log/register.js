import React from 'react';

const register = () => {
    return (
        <div className='box-login'>
            <input type="email" placeholder="Entrez votre adresse mail"/>
            <input type="password" placeholder="Entrez votre mot de passe"/>
            <input type="password" placeholder="Répétez votre mot de passe"/>
            <input type="submit"/>
        </div>
    );
};

export default register;