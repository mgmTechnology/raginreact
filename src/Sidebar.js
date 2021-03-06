import React from 'react'
import SidebarRow from './SidebarRow';
import IconHome from "@material-ui/icons/Home" 
import IconWhatshot from "@material-ui/icons/Whatshot"  
import IconSubscriptions from "@material-ui/icons/Subscriptions"  
import IconVideoLibrary from "@material-ui/icons/VideoLibrarySharp"  
import IconHistory from "@material-ui/icons/HistorySharp" 
import IconOndemandVideoOutlined from "@material-ui/icons/OndemandVideoOutlined" 
import IconWatchLaterOutlined from "@material-ui/icons/WatchLaterOutlined" 
import IconThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined" 
import IconExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined" 


import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            {/* note that object as property has to be capitalized. here: Icon */}
            <SidebarRow selected Icon={IconHome} title="Home" /> 
            <SidebarRow Icon={IconWhatshot} title="Trending"/>
            <SidebarRow Icon={IconSubscriptions} title="Subscription"/>
            <hr/>
            <SidebarRow Icon={IconVideoLibrary} title="Library"/>
            <SidebarRow Icon={IconHistory} title="History"/>
            <SidebarRow Icon={IconOndemandVideoOutlined} title="Your videos"/>
            <SidebarRow Icon={IconWatchLaterOutlined} title="Watch later"/>
            <SidebarRow Icon={IconThumbUpAltOutlined} title="Liked videos"/>
            <SidebarRow Icon={IconExpandMoreOutlined} title="Show me more"/>
            <hr/>
        </div>
    )
}

export default Sidebar
