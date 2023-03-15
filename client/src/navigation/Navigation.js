import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>    
                <NavLink to="/" className={(nav)=>(nav.isActive ? "nav-active":"")}>
                        <li>Home page</li>
                </NavLink>
                <NavLink to="/createpost" className={(nav)=>(nav.isActive ? "nav-active":"")}>
                    <li>Create post</li>
                </NavLink>
            </ul>
           
        </div>
    );
};

export default Navigation;