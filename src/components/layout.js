import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import '../styles/global.css';


const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({children}) => {
  return (
    <div className='layout-container'>
      <Helmet>
        <title>Stephanie Zhu</title>
      </Helmet>
      <header style={{ marginBottom: `1.5rem`, fontSize: '500%'}}>
        Stephanie Zhu
        {/* <Link to='/'>
          <h3 style={{ display: `inline`}}></h3>
        </Link>

        <ul className='nav-list'>
          <ListLink to='/'>home</ListLink>
          <ListLink to='/projects'>projects</ListLink>
        </ul> */}
      
      </header>

      <main>
      {children}
      </main>
    </div>
  )
}

export default Layout;