import React, { useState, useEffect } from 'react'
import "./Sidebar.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
// icon
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddIcon from '@material-ui/icons/Add';
// importing files
import SideBarOption from './Option/SideBarOption';
import { ExpandLess } from '@material-ui/icons';
// importing api from firebase
import db from '../../Api';

const Sidebar = () => {
    const [channels, setChannels] = useState([]);
        
    useEffect( ()=> {
        // run this code ONCE when the sidebar component loading
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels( snapshot.docs.map(doc =>({
                id: doc.id,
                name: doc.data().name,
            }))
            )
        ));
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Clever Programmer</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Rafeh Qazi
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SideBarOption Icon={InsertCommentIcon} title= "Threads"/>
            <SideBarOption Icon={InboxIcon} title= "Mentions & reactions"/>
            <SideBarOption Icon={DraftsIcon} title= "Saved items"/>
            <SideBarOption Icon={BookmarkIcon} title= "Your Channel browser"/>
            <SideBarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SideBarOption Icon={AppsIcon} title="Apps" />
            <SideBarOption Icon={FileCopyIcon} title="File browser" />
            <SideBarOption Icon={ExpandLessIcon} title= "Show Less"/>
            <hr />
            <SideBarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SideBarOption Icon={AddIcon} addChannelOption title="Add Channel" />
            {/* connect to db and list all the channels */}
            {/* sidebar options */}
            {channels.map( (channel) => (
                <SideBarOption title={channel.name} id={channel.id} />
            ))}
        </div>
    )
}

export default Sidebar;