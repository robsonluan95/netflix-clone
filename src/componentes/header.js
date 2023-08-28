import React from 'react';
import './header.css';

export default ({black})=>{
    return(
        <header className={black ? 'header--black' :''}>
            <div className='header--logo'>
                <a href='/'><img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='netflix'/> </a>
                
            </div>
            <div className='header--user'>
                <a href='/'><img src='https://i.pinimg.com/564x/e4/d4/7e/e4d47e58dc5efe19178443d54a11c863.jpg'/></a>
            </div>
        </header>
    )
}