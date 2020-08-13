import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
  
  import React from 'react';
  import './Nav.component.styles.scss';

function Nav(props){
    return (
        <>
            <nav>
                <ul className="navbar-menu">
                    <li className="navbar-link"><Link className='navbar-text' to='/'>Home</Link></li>
                    <li className="navbar-link"><Link className='navbar-text' to='/about'>About</Link></li>
                    <li className="navbar-link"><Link className='navbar-text' to='/portfolio'>Projects</Link></li>
                    <li className="navbar-link"><Link className='navbar-text' to='/contact'>Contact</Link></li>
                </ul>
            </nav> 
       </>
    )
}

export default Nav;