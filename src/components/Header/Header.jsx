import React from 'react'
// importing material-ui
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
// importing styles
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                {/* avatar for logged in user*/}
                <Avatar 
                    className="header__avatar"
                    alt="Raka Janitra"
                />
                {/* Time Icon*/}
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                {/* search icon*/}
                <SearchIcon />
                {/* input */}
                <input placeholder="Search Clever Programmer"/>
            </div>
            <div className="header__right">
                {/* help icon */}
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header;
