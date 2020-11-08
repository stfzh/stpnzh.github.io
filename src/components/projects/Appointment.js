import React from 'react';
import { Link } from 'gatsby';
import GithubSVG from '../svg/github.inline.svg';

const Appointment = () => {
  return (
    <>
      <p className='title is-4'>Appt picker.</p>
      <p>Modern appointment booking API.</p>
      <p>Built with the MERN stack, Redux, & Bulma.</p>
      <br />
      <span>
        <Link href='https://github.com/stpnzh/appointment-picker'>
          <GithubSVG style={{ marginRight: `1rem`}}/>
        </Link>
      </span>
    </>
  )
}

export default Appointment;