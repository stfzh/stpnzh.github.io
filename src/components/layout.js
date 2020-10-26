import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({children}) => {
  return (
    <div className='layout-container'>
      
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to='/'>
          <h3 style={{ display: `inline`}}></h3>
        </Link>

        <ul className='nav-list'>
          <ListLink to='/' className='nav-links'>home</ListLink>
          <ListLink to='/story' className='nav-links'>story</ListLink>
          <ListLink to='/projects' className='nav-links'>projects</ListLink>
        </ul>
      
      </header>

      <main>
      {children}
      </main>
    </div>
  )
}

export default Layout;