import React from "react";
import { BiBell } from 'react-icons/bi';

export default function Topbar () {
    return(
        <div className="topbar w-full ">
            <div className="topbarWeapper flex items-center justify-between h-full px-4 py-0">
            <div className="topLeft">
                <span className="logo font-bold text-3xl text-blue-900 cursor-pointer ...">Dashboard</span>
            </div>
            <div className="topRight">
                <div className="topbarIconsContainer">
                <BiBell />
                </div>
            </div>
            </div>
        </div>
    )
    
}