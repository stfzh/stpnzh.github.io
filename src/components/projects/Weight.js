import React from 'react';
import { Link } from 'gatsby';
import GithubSVG from '../svg/github.inline.svg';
import LinkSVG from '../svg/link.inline.svg';

const Weight = () => {
  return (
    <div>
      <p className='title is-4'>Weights.</p>
      <p>Track weights with a beautiful chart. </p>
      <p>Built with the MERN stack, Chart.js, & Semantic UI.</p>
      <br />
      <span class="icon has-text-info">
        <Link href='https://github.com/stpnzh/weight-tracker-chart' className='link is-primary'>
          <GithubSVG />
        </Link>
      </span>
    </div>
  )
}

export default Weight;