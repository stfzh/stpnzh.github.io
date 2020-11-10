import React from 'react';
import Layout from '../components/layout';
import Recipes from '../components/projects/Recipes';
import Weight from '../components/projects/Weight';
import Appointment from '../components/projects/Appointment';
import Accessory from '../components/projects/Accessory';
import NBA from '../components/projects/NBA';
import Site from '../components/projects/Site';
import Pattern from '../components/projects/Pattern';


const components = [
  <Appointment />, <Accessory />, <Recipes />, 
  <Weight />, <NBA />, <Site />
];

const cardComponents = components.map(i => 
  <div class="tile is-2 is-parent">
    <article className='tile is-child box'>
      {i}
    </article>
  </div>
)

let rows = [];
let cells = [];
cardComponents.forEach((component, idx) => {
  if (idx % 3 != 0) {
    cells.push(component);
  } else {
    rows.push(cells);
    cells = [];
    cells.push(component);
  }
  if (idx === cardComponents.length - 1) {
    rows.push(cells);
  }
});


const Projects = () => {
  return (
      <div>
        {rows.map(row => <div className='tile is-ancestor'>{row}</div>)}
      </div>
  )
}

export default Projects;