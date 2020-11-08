import React from 'react';
import { Link } from 'gatsby';
import Projects from './projects';
import '../styles/mystyles.scss';


const Home = () => {
  return (
    <div className='hero p-5'>
      
      <section className='hero'>
        <div className='container has-text-white'>
          <h1 className='subtitle is-1 has-text-white'>Hi, I'm Stephanie Zhu.</h1>
          <p>Software engineer living in the SF Bay Area.</p>
          <p>Enjoys cooking, powerlifting, bicycling, and snowboarding.</p>
          <br />
          <p>
            While you're here, check out some of my projects below or <Link href='mailto:slzzhu2@gmail.com' className='link is-primary'><strong>drop a line</strong></Link>.
          </p>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <Projects />
        </div>
      </section>
      
    </div>
  )
}


export default Home;