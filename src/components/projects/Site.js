import React from 'react';
import { Link } from 'gatsby';
import GithubSVG from '../svg/github.inline.svg';
import LinkSVG from '../svg/link.inline.svg';

const Site = () => {
  return (
    <>
      <p className='title is-4'>This site.</p>
      <p>Built with Gatsby, React, & Bulma.</p>
      <br />
      <span>
        <Link href='https://github.com/stpnzh/stpnzh.github.io'>
          <GithubSVG style={{ marginRight: `1rem`}}/>
        </Link>
        <Link href='https://stpnzh.github.io/'>
          <LinkSVG />
        </Link>
      </span>
    </>
  )
}

export default Site;