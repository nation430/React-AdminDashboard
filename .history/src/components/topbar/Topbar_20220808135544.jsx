import React from "react";

export default function Topbar () {
    return(
        <div className="topbar w-full ">
            <div className="topbarWeapper flex items-center justify-between h-full px-4 py-0">
            <div className="topLeft">
                <span className="logo">Dashboard</span>
            </div>
            <div className="topRight">Right</div>
            </div>
        </div>
    )
    
}