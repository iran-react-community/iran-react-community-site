import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import linkedin from "../assets/linkedin.png"
import telegram from "../assets/telegram.png"
import twitter from "../assets/twitter.png"

const socialLinksItems = [
  {
    text: "Telegram",
    icon: telegram,
    description: <MuiLink color="inherit" href="https://t.me/iran_react_community">
        @iran_react_community
      </MuiLink>
  }, {
    text: "Linkedin",
    icon: linkedin,
    description: <MuiLink color="inherit" href="https://www.linkedin.com/company/iran-react-community/">
        @iran-react-community
      </MuiLink>
  }, {
    text: "Twitter",
    icon: twitter,
    description: <MuiLink color="inherit" href="https://twitter.com/iran_react">
        @iran_react
      </MuiLink>
  }
]

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    marginBottom: 100,
    background: theme.palette.primary.backgroundLight
  },
  img: {
    margin: '0 auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    width: 64,
  },
  '@global': {
    a: {
      '&:active': {
        color: 'unset',
        textDecoration: 'none'
      },
      '&:hover': {
        color: '#eee'
      }
    }
  }
}));

export default function SocialLinks() {
  const classes = useStyles();

  return (<div className={classes.root}>
    <Paper className={classes.paper}>
      <Grid container="container" spacing={2} justify="center" alignItems="center">
        {socialLinksItems.map(item => (<Grid item="item" xs={4}>
            <Grid item="item" xs={12} sm="sm" container="container">
              <Grid justify="center" alignItems="center" item="item" xs="xs" container="container" direction="column" spacing={2}>
                <Grid item="item" xs="xs">
                  <img className={classes.img} alt="complex" src={item.icon}/>
                  <Typography gutterBottom="gutterBottom" variant="subtitle1">
                    {item.text}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>))
        }
      </Grid>
    </Paper>
  </div>);
}
