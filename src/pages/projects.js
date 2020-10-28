import React from 'react';
import Layout from '../components/layout';
import Recipes from '../components/projects/Recipes';
import Weight from '../components/projects/Weight';
import Appointment from '../components/projects/Appointment';
import Accessory from '../components/projects/Accessory';
import NBA from '../components/projects/NBA';
import Site from '../components/projects/Site';


const components = [<Appointment />, <Accessory />, <Recipes />, 
                    <Weight />, <NBA />, <Site />]

const cardComponents = components.map(i => 
  <td style={{border: `none`}}>
  <div className="card">
    <div className="card-content" >
      <div className="content">
        {i}
      </div>
    </div>
  </div>
  </td>
)

let rows = [];
let cells = [];
cardComponents.forEach((component, idx) => {
  if (idx % 2 != 0) {
    cells.push(component);
  } else {
    rows.push(cells);
    cells = [];
    cells.push(component);
  }
  if (idx === cardComponents.length - 1) {
    rows.push(cells)
  }
});


const Projects = () => {
  return (
    <Layout>
      <h1 className='subtitle is-2'>Projects.</h1>
      <table className='table is-borderless'>
       {rows.map(row => <tr>{row}</tr>)}
      </table>
    </Layout>
  )
}

export default Projects;