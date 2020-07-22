import React from 'react';
import './styles.css';
import Ash from './Ash'
import EducationSection from './Section'
import ProjectSection from './ProjectSection'
import Gallery from './gallery'

import { Grid } from '@material-ui/core';

function App() {
  return (
    <Grid container justify="center" alignItems="flex-start" direction="row" >
      <Grid item style={{ paddingBottom:20 }}>
        <Ash />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" item style={{backgroundColor: '#cfd8dc'}} xs={12}>
          <EducationSection/>
        <ProjectSection/>
      </Grid>
      <Grid item>
        <Gallery/>
      </Grid>
    </Grid>

  );
}

export default App;
