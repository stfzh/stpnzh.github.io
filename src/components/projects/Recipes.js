import React from 'react';
import { Link } from 'gatsby';


const Recipes = () => {
  return (
    <div>
      <p>
      Not so basic recipes (did I mention I developed these?) in a semi-basic recipes app.
      Check it out <Link style={{color: `#209cee`}} href='https://stpnzh.github.io/recipes/'>here</Link>.
      <br/>
      Built with React & Bootstrap.
      </p>
    </div>
  )
}

export default Recipes;