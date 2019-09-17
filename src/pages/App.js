import React from 'react';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import SocialLinks from '../components/SocialLinks';
import Link from '../components/Link';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import logo from "../assets/logoirc.jpeg"
import Helmet from "react-helmet"

const useStyles = makeStyles(theme => ({
  '@global':{
    body: {
      background: theme.palette.primary.background
    }
  },
  logo:{
    width:'45vh',
    display:"flex",
    margin: "0 auto"
  },
  copyright:{
    color:'#ffffff'
  }
}));

function Title(){
  return(
    <Helmet>
      <title> Iran React Community </title>
    </Helmet>
  )
}

function Copyright() {
  const classes = useStyles();

  return (<Typography variant="body2" classes={{root:classes.copyright}} align="center">
    {'Copyright © '}
    <MuiLink color="inherit" href="https://iran-react-community.github.io">
      Iran React Community
    </MuiLink>{' '}
    {new Date().getFullYear()}
    {'.'}
    <br/>
    Designed with {' '}
    <MuiLink color="inherit" href="https://gatsbyjs.org">
      Gatsby
    </MuiLink>
  </Typography>);
}

export default function App(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Title/>
      <Box m={1}>
        <img src={logo} className={classes.logo} />
        <SocialLinks/>
        <Copyright/>
      </Box>
    </Container>
  )
}
