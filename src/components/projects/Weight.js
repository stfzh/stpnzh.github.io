import React from 'react';
import { Link } from 'gatsby';
import GithubSVG from '../svg/github.inline.svg';
import LinkSVG from '../svg/link.inline.svg';

const Weight = () => {
  return (
    <div>
      <h4>Weight tracker.</h4>
      <p>
      Weight tracking with a beautiful chart. 
      </p>
      <p>
      Built with the MERN stack, Chart.js, & Semantic UI.
      </p>
      <span>
        <Link href='https://github.com/stpnzh/weight-tracker-chart'>
          <GithubSVG style={{ marginRight: `1rem`}}/>
        </Link>
      </span>
    </div>
  )
}

export default Weight;