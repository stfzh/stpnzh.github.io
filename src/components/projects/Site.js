import React from 'react';
import { Link } from 'gatsby';
import GithubSVG from '../svg/github.inline.svg';
import LinkSVG from '../svg/link.inline.svg';

const Site = () => {
  return (
    <div>
      <h4>This site.</h4>
      <p>
        Built with Gatsby, React, & Bulma.
      </p>
      <span>
        <Link href='https://github.com/stpnzh/stpnzh.github.io'>
          <GithubSVG style={{ marginRight: `1rem`}}/>
        </Link>
        <Link href='https://stpnzh.github.io/'>
          <LinkSVG />
        </Link>
      </span>
    </div>
  )
}

export default Site;