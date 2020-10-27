import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Recipes from '../components/projects/Recipes';
import Weight from '../components/projects/Weight';
import Appointment from '../components/projects/Appointment';
import Accessory from '../components/projects/Accessory';
import NBA from '../components/projects/NBA';


const Projects = () => {
  return (
    <Layout>
      <h1 className='title is-2'>Projects.</h1>
      <table>
        <tr>
          <td>
            <div className="card">
              <div className="card-content" >
                <div className="content">
                  <h4>Appointment Picker.</h4>
                  <Appointment />
                </div>
              </div>
            </div>
          </td>
          <td>
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <h4>Weight tracking.</h4>
                  <Weight />
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="card">
              <div className="card-content" >
                <div className="content">
                  <h4>Accessory exercises.</h4>
                  <Accessory />
                </div>
              </div>
            </div>
          </td>
          <td>
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <h4><Link className='is-primary' href='https://stpnzh.github.io/recipes/'>Recipes.</Link></h4>
                  <Recipes />
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="card">
              <div className="card-content" >
                <div className="content">
                  <h4>NBA.</h4>
                  <NBA />
                </div>
              </div>
            </div>
          </td>
          <td>
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <h4><Link className='is-primary'>This site.</Link></h4>
                  <p>Built with Gatsby & Bulma.</p>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </Layout>
  )
}

export default Projects;