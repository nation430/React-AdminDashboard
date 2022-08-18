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
                <div className="topbarIconsContainer relative">
                <BiBell />
                <span className="topIconBadge absolute text-white bg-red-600 right-1 -top-1 flex items-center justify-center rounded-full text-xs">2</span>
                </div>
            </div>
            </div>
        </div>
    )
    
}