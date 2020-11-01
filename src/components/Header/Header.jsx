import React from 'react'
// importing material-ui
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
// importing styles
import './Header.css';
import { useStateValue } from '../../Context/StateProvider';

const Header = () => {
    const [{ user }] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                {/* avatar for logged in user*/}
                <Avatar 
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
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
