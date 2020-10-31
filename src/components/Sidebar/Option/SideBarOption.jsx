import React from 'react'
import "./SideBarOption.css";

const SideBarOption = ({ Icon, title }) => {
    console.log(Icon);
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
            <h3 className="sidebarOption__channel">
                <span className="sidebarOption__hash"> # {title}</span>
            </h3>
            )}
        </div>
    );
}

export default SideBarOption;
