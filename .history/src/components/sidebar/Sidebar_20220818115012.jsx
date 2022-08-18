import "./sidebar.css";
import { MdLineStyle, MdOutlineTimeline, MdTrendingUp } from "react-icons/md";

export default function sidebar(){
    return(
        <div className="sidebar"> 
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
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
                    <li className="sidebarListItems flex">
                    <MdTrendingUp />
                   Sales
                    </li>

                    <li className="sidebarListItems flex">
                    <MdTrendingUp />
                   Sales
                    </li>

                    <li className="sidebarListItems flex">
                    <MdTrendingUp />
                   Sales
                    </li>

                    <li className="sidebarListItems flex">
                    <MdTrendingUp />
                   Sales
                    </li>

                    <li className="sidebarListItems flex">
                    <MdTrendingUp />
                   Sales
                    </li>

                    <li className="sidebarListItems flex">
                    <MdTrendingUp />
                   Sales
                    </li>

                    <li className="sidebarListItems flex">
                    <MdTrendingUp />
                   Sales
                    </li>

                    <li className="sidebarListItems flex">
                    <MdTrendingUp />
                   Sales
                    </li>

                    <li className="sidebarListItems flex">
                    <MdTrendingUp />
                   Sales
                    </li>


                  
                  
              
                </ul>
            </div>
        </div>
        </div>
    )
}