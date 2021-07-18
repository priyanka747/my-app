import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Button from '@material-ui/core/Button';
import "./topbar.css"

type props = {
    name:string ;//= "Jason Statham"

    }
const Topbar:React.FC<props> = ({name}) => {
    
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
            <span className="nameSt"> { name }</span> 
            <div className="topbarIconContainer">
            <KeyboardArrowDownIcon fontSize="small"/> 
            </div>
        </div>
      </div>
    </div>
    )
}
export default Topbar;
