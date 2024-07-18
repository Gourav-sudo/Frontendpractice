import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";
function Navigation() {
  return (
    <div className='nav'>
    <Link to = '' className='navlink'>Home</Link>
    <Link to = '/add' className='navlink'>add</Link>
    <Link to = 'Viewuser' className='navlink'>VIEW</Link>
    <Link to = '/edit/:id' className='navlink'>Edit</Link>
    </div>
  )
}

export default Navigation;
