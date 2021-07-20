import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Button from '@material-ui/core/Button';
import "./topbar.css"
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Divider } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }),
)(LinearProgress);

type props = {
    name:string ;//= "Jason Statham"

    }
const Topbar:React.FC<props> = ({name}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">LOGO</span>
        </div>
        <div className="topRight">
        <div  className="topbarIconContainer">
        <Button variant="contained" color="primary" size="large" className="btn btn-primary" >
            Button 1
        </Button>
        </div>
          <div className="topbarIconContainer">
            <NotificationsIcon fontSize="small" />
            {/* <span className="topIconBadge">2</span> */}
          </div>
          <div className="topbarIconContainer">
            <InfoIcon fontSize="small"/>
            {/* <span className="topIconBadge">2</span> */}
          </div>
          <div className="topbarIconContainer">
            <PersonIcon fontSize="small"/> 
            </div>
            <span className="nameSt"  onClick={handleMenu}> { name }</span> 
            <div className="topbarIconContainer">
            <KeyboardArrowDownIcon fontSize="small" /> 
            </div>
            <Menu
                className="profileMenu"
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem alignItems='center' className="profileMenuItem" onClick={handleClose}><ListItemIcon><FavoriteIcon fontSize="medium" /></ListItemIcon><Typography >Menu 1</Typography> </MenuItem>
                <Divider orientation="horizontal" /> 
                <MenuItem alignItems='center' className="profileMenuItem" onClick={handleClose}><ListItemIcon><FavoriteIcon fontSize="medium" /></ListItemIcon><Typography >Menu 2</Typography> </MenuItem>
                <Divider orientation="horizontal" /> 
                <MenuItem alignItems='center' className="profileMenuItem" onClick={handleClose}><ListItemIcon><FavoriteIcon fontSize="medium" /></ListItemIcon><Typography >Menu 3</Typography> </MenuItem>
                <Divider orientation="horizontal" /> 
                <MenuItem alignItems='center' className="profileMenuItem" onClick={handleClose}><Typography >lorem ipsum</Typography> <LinearProgress variant="determinate" value={50} /> </MenuItem>
                <Divider orientation="horizontal" /> 
                <MenuItem alignItems='center' className="profileMenuItem" onClick={handleClose}><ListItemIcon><ExitToAppIcon  fontSize="medium" /></ListItemIcon><Typography >logout</Typography> </MenuItem>
                <Divider orientation="horizontal" />  
              </Menu>
        </div>
      </div>
    </div>
    )
}
export default Topbar;
