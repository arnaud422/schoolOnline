import React, {useState} from 'react';

import Login from './login';
import Register from './register';

const Log = (props) => {
    const [loginModal, setLoginModal] = useState(props.login)
    const [registerModal, setRegisterModal] = useState(props.register)

    const handleModal = ()=>{
        setLoginModal(!loginModal)
        setRegisterModal(!registerModal)
    }

    return (
        <div className='login-register-card'>
            <ul className='menu-login-register'>
                <li onClick={handleModal}><p>Se connecter</p></li>
                <li onClick={handleModal}><p>S'inscrire</p></li>
            </ul>
            
            <div className='login-register-form'>
                {loginModal && <Login/>}
                {registerModal && <Register/>}
            </div>   
            
        </div>
    );
};

export default Log;