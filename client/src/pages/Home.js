import React from 'react';

//Log composant
import Log from '../components/Log/'


const Home = () => {
    return (
        <div className='Home'>
           <Log login={true} register={false}/>
        </div>
    );
};

export default Home;