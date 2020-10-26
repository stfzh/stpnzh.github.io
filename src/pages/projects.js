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
      <h3>Appointment Picker</h3>
      <Appointment />
      <h3>Weight Tracking Chart</h3>
      <Weight />
      <h3>Accessory Exercises Generator</h3>
      <Accessory />
      <h3>Recipes by the Cards</h3>
      <Recipes />
      <h3>Predicting the 2019-20 NBA MVP</h3>
      <NBA />
      <h3>This site.</h3>
      <p>Built with Gatsby.</p>
    </Layout>
  )
}

export default Projects;