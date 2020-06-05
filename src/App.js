import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Link from '@material-ui/core/Link';
// import ProTip from './ProTip';

// import { BrowserRouter, Route, Link } from "react-router-dom";

import About from './pages/About';
import Blog from './pages/Blog';
import Project from './pages/Project';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591


function App() {
  return (
    <div>
    <Container maxWidth="sm">
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href={process.env.PUBLIC_URL + '/pages/About'}
          label="About"
          icon={<HomeIcon fontSize="small" />}
          onClick={handleClick}
        />
        <StyledBreadcrumb component="a" href={process.env.PUBLIC_URL + '/pages/Blog'} label="Blog" /*onClick={handleClick} TODO: */ />
        <StyledBreadcrumb
          href={process.env.PUBLIC_URL + '/pages/Project'}
          label="Project"
          deleteIcon={<ExpandMoreIcon />}
          onClick={handleClick}
          onDelete={handleClick}
        />
      </Breadcrumbs>
    </Container>

    <Router>
      <div>
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/pages/About'}>
            <About />
          </Route>
          <Route path={process.env.PUBLIC_URL + '/pages/Blog'}>
            <Blog />
          </Route>
          <Route path={process.env.PUBLIC_URL + '/pages/Project'}>
            <Project />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

function handleClick() {

}

export default App;
