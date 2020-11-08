import React from 'react';
import { Link } from 'gatsby';
import GithubSVG from '../svg/github.inline.svg';

const Pattern = () => {
  return (
    <>
      <p className='title is-4'>Match patterns.</p>
      <p>Get, post, and pattern-match words.</p>
      <p>Built with Flask, React, & Bootstrap.</p>
      <br />
      <span>
      <Link href='https://github.com/stpnzh/pattern-matching-search'>
        <GithubSVG />
      </Link>
      </span>
    </>
  )
}

export default Pattern;