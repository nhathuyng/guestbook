import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';

import React from 'react';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            GuestBook
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
