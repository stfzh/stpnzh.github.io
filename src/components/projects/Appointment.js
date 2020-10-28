import React from 'react';
import { Link } from 'gatsby';
import GithubSVG from '../svg/github.inline.svg';
import LinkSVG from '../svg/link.inline.svg';

const Appointment = () => {
  return (
    <div>
      <h4>Appointment picker.</h4>
      <p>
        Modern appointment booking API.
      </p>
      <p>
        Built with the MERN stack, Redux, & Bulma.
      </p>
      <span>
        <Link href='https://github.com/stpnzh/appointment-picker'>
          <GithubSVG style={{ marginRight: `1rem`}}/>
        </Link>
      </span>
    </div>
  )
}

export default Appointment;