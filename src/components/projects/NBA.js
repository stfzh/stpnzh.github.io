import React from 'react';
import { Link } from 'gatsby';
import GithubSVG from '../svg/github.inline.svg';

const NBA = () => {
  return (
    <div>
      <h4>NBA MVP</h4>
      <p>
        Dabbling in machine learning. Predict the NBA MVP.
      </p>
      <p>
        Built with Pandas, Scikit-Learn, & Seaborn in Jupyter notebook.
      </p>
      <span>
        <Link href='https://github.com/stpnzh/nba'>
          <GithubSVG style={{ marginRight: `1rem`}}/>
        </Link>
      </span>
    </div>
  )
}

export default NBA;