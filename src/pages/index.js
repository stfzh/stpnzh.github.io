import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Home = () => {
  return (
    <Layout>
      <div>
        <h1>Hi, I'm Stephanie.</h1>
        <p>
          Working on software engineering.
          <br />
          Living in the SF Bay Area.
          <br />
          Enjoying cooking, powerlifting, bicycling, and snowboarding. Enjoying cooking, powerlifting, bicycling, and snowboarding.
          <br />
          Always learning.
        </p>
        <p>While you're here, check out <Link to='/projects' style={{color: `#209cee`}}>my projects</Link> or <Link href='mailto:stphzh@gmail.com' style={{color: `#209cee`}}>drop a line</Link>.</p>
      </div>
    </Layout>
  )
}


export default Home;