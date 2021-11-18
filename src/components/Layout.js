import React from "react";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
    <nav className='navbar'>
        <span className='ham'> &#9776;</span>
        <div className='brand-name'>
            BlueNexus
        </div>
    </nav>

    <section className='sidebar'>
        <ul>
            <li><NavLink to='/'> <span className='icon'></span>  <span className='i-link'>Dashboard</span></NavLink></li>
            <li><NavLink to='/customers'> <span className='icon'></span> <span className='i-link'>Customers</span></NavLink></li>
            <li><NavLink to='/report'> <span className='icon'></span> <span className='i-link'>Reports</span></NavLink></li>
        </ul>
    </section>
      <div className='main-section'>{children}</div>
    </>
  );
};

export default Layout;
