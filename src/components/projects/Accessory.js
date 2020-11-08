import React from 'react';
import { Link } from 'gatsby';
import GithubSVG from '../svg/github.inline.svg';
import LinkSVG from '../svg/link.inline.svg';

const Accessory = () => {
  return (
    <>
      <p className='title is-4'>Exercises.</p>
      <p>Generate accessory exercises.</p>
      <p>Built with Flask & Bootstrap.</p>
      <br />
      <span>
        <Link href='https://github.com/stpnzh/exercises'>
          <GithubSVG style={{ marginRight: `1rem`}}/>
        </Link>
        <Link href='https://polar-mountain-37048.herokuapp.com/'>
          <LinkSVG />
        </Link>
      </span>
    </>
  )
}

export default Accessory;