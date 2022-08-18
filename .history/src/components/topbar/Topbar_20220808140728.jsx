import React from "react";
import { FaBeer } from 'react-icons/fa';

export default function Topbar () {
    return(
        <div className="topbar w-full ">
            <div className="topbarWeapper flex items-center justify-between h-full px-4 py-0">
            <div className="topLeft">
                <span className="logo font-bold text-3xl text-blue-900 cursor-pointer ...">Dashboard</span>
            </div>
            <div className="topRight">
                <div className="topbarIcons">
                <FaBeer />
                </div>
            </div>
            </div>
        </div>
    )
    
}