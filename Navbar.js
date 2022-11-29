import React from 'react'
import "./navbar.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className='main-nav'>
    <section className='upper-section'>
      <div className='logo'>
      <h1>FIFA</h1>
    </div>
    <div className='info'>
      <ul>
        <li>
       <a href='#'>store</a>
       </li>
       <li>
       <a href='#'>ticket</a>
       </li>
       <li>
       <a href='#'>login</a>
        </li>
      </ul>
    </div>
    </section>
    <section  className='lower-section'>
      <div className='lower-menu-link'>
       <ul>
       <li><a href='#'>Tournaments of fifa</a></li>
        <li><a href='#'>ABOUT FIFA</a></li>
        <li><a href='#'>NEWS</a></li>
        <li><a href='#'>SOCIAL IMPACT</a></li>
        <li><a href='#'>FOOTBALL DEVELOPMENT</a></li>
        <li><a href='#'>TECHNICAL</a></li>
        <li><a href='#'>LEGAL</a></li>
        <li><a href='#'>WORLD RANKING</a></li>
       </ul>
      </div>
    </section>
    <section  className='lowest-section'>
      <div className='lowest-menu-link'>
       <ul>
       <li><h1>MEN RANKING</h1></li>
       <li><h1>WOMEN RANKING</h1></li>
       <li><h1>NEWS</h1></li>
       <li><h1>RANKING PROCEDURES-MEN</h1></li>
       <li><h1>RANKING PROCEDURES-WOMEN</h1></li>
       </ul>
      </div>
    </section>
  </nav>
  )
}

export default Navbar;
