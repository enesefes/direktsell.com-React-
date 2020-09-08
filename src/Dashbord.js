import React, {useEffect, useState} from 'react'
import "./Dashbord.css";
import Ads from "./ads"
import {Link } from 'react-router-dom';


import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BusinessIcon from '@material-ui/icons/Business';
import MessageIcon from '@material-ui/icons/Message';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Route } from 'react-router-dom';
import Companies from './companies';
import Messages from './Messages';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function Dashbord() {
  //Widht ile alakalı işler
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
      function handleResize() {
      setWidth(window.innerWidth);
    }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
      }, [width]);
      useEffect(() => {
      width < 600 && handleSideNavToggle();
      });
      function handleSideNavToggle() {
      
      }




    const classes = useStyles();
  const theme = useTheme();


  

  const [open, setOpen] = React.useState(false);
  const [adsOpen, setAdsOpen] = React.useState(false);
  const [companiesOpen, setCompaniesOpen]=React.useState(false);
  const [ messagesOpen, setMessagesOpen]=React.useState(false);
  const [settingsOpen, setSettingsOpen]=React.useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    
    
    
  };
const changeAds = () =>{
  setAdsOpen(true);
  setCompaniesOpen(false);
  setMessagesOpen(false);
  setSettingsOpen(false);
  setOpen(false);
}

const changeCompanies = ( ) =>{
  setCompaniesOpen(true);
  setAdsOpen(false);
  setMessagesOpen(false);
  setSettingsOpen(false);
  setOpen(false);
}
const changeMessages = ( ) =>{
  setMessagesOpen(true);
  setCompaniesOpen(false);
  setAdsOpen(false);
  setSettingsOpen(false);
  setOpen(false);
}

const changeSettings = ( ) =>{
  setSettingsOpen(true);
  setMessagesOpen(false);
  setCompaniesOpen(false);
  setAdsOpen(false);
  setOpen(false);
}

  

    return (
        <div className={classes.root}>
      <CssBaseline />
      {width > 768 && (
      <AppBar id="app__bar"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography id="typography__appbar" variant="h6" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      )}
      {width > 768 && (
      
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        
        <List>
        
          
        <Link className="linkler" to="/home/ads/">          
          <ListItem id={adsOpen === true && ("listItem__link")} button onClick={changeAds}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Ads" />
        </ListItem>
        </Link>
        

        <Link className="linkler" to="/home/companies/">
        <ListItem id={companiesOpen === true && ("listItem__link")} button onClick={changeCompanies}>
          <ListItemIcon>
            <BusinessIcon />
          </ListItemIcon>
          <ListItemText primary="Companies" />
        </ListItem>
        </Link>

        <Link className="linkler" to="/home/messages/">
        <ListItem id={messagesOpen === true && ("listItem__link")} button onClick={changeMessages}>
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        </Link>

        <Link className="linkler" to="/home/settings/">
        <ListItem  id={settingsOpen === true && ("listItem__link")} button onClick={changeSettings}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        </Link>
        
        </List>
        <Divider />
        <List>
        <Link className="linkler" to="/">
        <ListItem button onClick={handleDrawerClose}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
        </Link>
        </List>
      </Drawer>
      )}

    
      
      <main className={classes.content}>
          {width < 768 && (
            <div className={classes.toolbar} /> 
          )}
                
          <Route path="/home/ads/">
            <Ads/>
          </Route>
          <Route path="/home/companies/">
            <Companies/>
          </Route>
          <Route path="/home/messages/">
            <Messages/>
          </Route>
          <Route path="/home/settings/">
            <h1>Settings</h1>
          </Route>
      
      
        
      </main>
      
    </div>
    
    )
    
}

export default Dashbord
