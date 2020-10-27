import React from 'react';
import Layout from '../components/layout';
import Recipes from '../components/projects/Recipes';
import Weight from '../components/projects/Weight';
import Appointment from '../components/projects/Appointment';
import Accessory from '../components/projects/Accessory';
import NBA from '../components/projects/NBA';


const Projects = () => {
  return (
    <Layout>
      <h1>Projects.</h1>
      <h2>Appointment Picker.</h2>
      <Appointment />
      <h2>Weight Tracking Chart.</h2>
      <Weight />
      <h2>Accessory Exercises Generator.</h2>
      <Accessory />
      <h2>Some of my favorite recipes.</h2>
      <Recipes />
      <h2>Predicting the 2019-20 NBA MVP.</h2>
      <NBA />
      <h2>This site.</h2>
      <p>Built with Gatsby.</p>
    </Layout>
  )
}

export default Projects;