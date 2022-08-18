import React from "react";
import  "./topbar.css";
import { BiBell } from 'react-icons/bi';
import { MdLanguage, MdSettings  } from "react-icons/md";


export default function Topbar () {
    return(
        <div className="topbar w-full h-12 bg-white sticky top-0  ">
            <div className="topbarWeapper flex items-center justify-between h-full px-4 py-0">
            <div className="topLeft">
                <span className="logo font-bold text-3xl text-blue-900 cursor-pointer ...">Dashboard</span>
            </div>
            <div className="topRight flex items-center">

                {/* First icon  */}
                <div className="topbarIconsContainer relative cursor-pointer ... ml-3 text-gray-600">
                <BiBell />
                <span className="topIconBadge absolute text-white bg-red-600 right-1 -top-1 flex items-center justify-center rounded-full text-xs h-3 w-3">2</span>
                </div>

                   {/*second icon  */}
                <div className="topbarIconsContainer relative cursor-pointer ... ml-3 text-gray-600">
                <MdLanguage />
                <span className="topIconBadge absolute text-white bg-red-600 right-1 -top-1 flex items-center justify-center rounded-full text-xs h-3 w-3">2</span>
                </div>
                

                    {/*third icon  */}
                <div className="topbarIconsContainer relative cursor-pointer ... mx-3 text-gray-600">
                < MdSettings  />
                </div>
                <img src="images/img.png" alt="BigCo Inc. logo"  className="topAvater w-6 h-6 rounded-full cursor-pointer ..."/>
               
            </div>
            </div>
        </div>
    )
    
}