import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
import { Link } from 'react-router-dom';

import React from 'react';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            GuestBook
          </Typography>
          <div>
            <Button component={Link} to="/" variant="text" color="secondary">
              Home
            </Button>
            <span> | </span>
            <Button
              component={Link}
              to="/about"
              variant="text"
              color="secondary"
            >
              About
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
