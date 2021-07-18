import React from 'react'
import './sidebar.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
const Sidebar = () => {
    return (
        <div className="sidebar">

            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h4 className="sidebarHeading">  Heading 1</h4>
                        <ul className="sidebarList">
                        <li className="sidebarSubHeading active"><DashboardIcon fontSize="small"/>
                            Menu Option 1</li>
                        <li className="sidebarSubHeading"><BookmarkOutlinedIcon fontSize="small"/>
                            Menu Option 2</li>
                        <li className="sidebarSubHeading"><BookmarkOutlinedIcon fontSize="small"/>
                            Menu Option 3</li>
                           
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                    <h4 className="sidebarHeading">  Heading 2</h4>
                    <ul className="sidebarList">
                    <li className="sidebarSubHeading"><BookmarkOutlinedIcon fontSize="small"/>
                            Menu Option 4</li>
                            <li className="sidebarSubHeading"><BookmarkOutlinedIcon fontSize="small"/>
                            Menu Option 5</li>
                        </ul>
                        </div>
                    <div className="sidebarMenu">
                    <h4 className="sidebarHeading">  Heading 3</h4>
                    <ul className="sidebarList">
                    <li className="sidebarSubHeading"><BookmarkOutlinedIcon fontSize="small"/>
                            Menu Option 6</li>
                            <li className="sidebarSubHeading"><BookmarkOutlinedIcon fontSize="small"/>
                            Menu Option 7</li>
                        </ul>
                        </div>
                    <div className="sidebarMenu">
                    <h4 className="sidebarHeading">  Heading 4</h4>
                    <ul className="sidebarList">
                    <li className="sidebarSubHeading"><BookmarkOutlinedIcon fontSize="small"/>
                            Menu Option 8</li>
                            <li className="sidebarSubHeading"><BookmarkOutlinedIcon fontSize="small"/>
                            Menu Option 9</li>
                        </ul> </div>
            </div>
        </div>
    )
}

export default Sidebar;