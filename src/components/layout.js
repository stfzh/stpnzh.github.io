import React from 'react';
import { Link } from 'gatsby';


const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({children}) => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: `45%`, padding: `0 1rem` }}>
      
      <header style={{ marginBottom: `1.5rem` }}>
      
      {/* <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, fontColor: `gray` }}>
        <h3 style={{ display: `inline` }}>stephanie zhu</h3>
      </Link> */}
      
      {/* <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, fontColor: `gray` }}> */}
        <h3 style={{ display: `inline`, font: `Georgia`}}>stpnzh</h3>
      {/* </Link> */}

      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to='/'>home</ListLink>
        <ListLink to='/about/'>about</ListLink>
      </ul>
      
      </header>

      {children}

    </div>
  )
}

export default Layout;