import React from "react";
import "./SidebarOpt.css";
function SidebarOpt(props) {
  return (
    <div className={`siderbaropt ${props.active && `sidebarpoption-active`}`}>
      <props.Icon className="icon"></props.Icon>
      <h2>{props.Text}</h2>
    </div>
  );
}

export default SidebarOpt;
