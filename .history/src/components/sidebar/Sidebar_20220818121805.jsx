import "./sidebar.css";
import { MdLineStyle, MdOutlineTimeline, MdTrendingUp } from "react-icons/md";

export default function sidebar(){
    return(
        <div className="sidebar sticky bg-white"> 
        <div className="sidebarWrapper p-5">
            {/* first sidenavbar */}
            <div className="sidebarMenu mb-2.5">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList px-4 py-0">
                    <li className="sidebarListItems flex">
                    <MdLineStyle />
                    Home
                    </li>

                    <li className="sidebarListItems flex">
                    <MdOutlineTimeline />
                    Analytics
                    </li>


                    <li className="sidebarListItems flex">
                    <MdTrendingUp />
                   Sales
                    </li>

                  
                  
              
                </ul>
            </div>

            {/* second sidenavbar */}
            <div className="sidebarMenu mb-2.5">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList px-4 py-1">
                    <li className="sidebarListItems flex items-center">
                    <MdLineStyle />
                    Home
                    </li>

                    <li className="sidebarListItems flex  items-center" >
                    <MdOutlineTimeline />
                    Analytics
                    </li>


                    <li className="sidebarListItems flex items-center">
                    <MdTrendingUp />
                   Sales
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}