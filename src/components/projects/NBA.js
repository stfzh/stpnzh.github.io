import React from 'react';
import { Link } from 'gatsby';
import GithubSVG from '../svg/github.inline.svg';

const NBA = () => {
  return (
    <>
      <p className='title is-4'>NBA MVP</p>
      <p>Predict the NBA MVP</p>
      <p>Built with Pandas, Scikit-Learn, & Seaborn in Jupyter notebook.</p>
      <br />
      <span>
        <Link href='https://github.com/stpnzh/nba'>
          <GithubSVG />
        </Link>
      </span>
    </>
  )
}

export default NBA;