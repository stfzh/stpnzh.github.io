import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import '../styles/mystyles.scss';

const Home = () => {
  return (
    <Layout>
      <div>
        <h1 className='subtitle is-1'>Hi, I'm Stephanie.</h1>
        <p>
          Working on software engineering.
          <br />
          Living in the SF Bay Area.
          <br />
          Enjoying cooking, powerlifting, bicycling, and snowboarding.
          <br />
          Always learning.
        </p>
        <br />
        <p>While you're here, check out <Link to='/projects' className='link is-primary'>my projects</Link> or <Link href='mailto:slzzhu2@gmail.com' className='link is-primary'>drop a line</Link>.</p>
      </div>
    </Layout>
  )
}


export default Home;