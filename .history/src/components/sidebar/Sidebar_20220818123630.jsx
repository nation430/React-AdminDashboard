import "./sidebar.css";
import { MdLineStyle, MdOutlineTimeline, MdTrendingUp } from "react-icons/md";

export default function sidebar(){
    return(
        <div className="sidebar sticky"> 
        <div className="sidebarWrapper p-5">
            {/* first sidenavbar */}
            <div className="sidebarMenu mb-2.5">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList px-4 py-0">
                    <li className="sidebarListItems flex items-center">
                    <MdLineStyle className="sidebarIcon"/>
                    Home
                    </li>

                    <li className="sidebarListItems flex items-center">
                    <MdOutlineTimeline className="sidebarIcon" />
                    Analytics
                    </li>


                    <li className="sidebarListItems flex items-center">
                    <MdTrendingUp className="sidebarIcon" />
                   Sales
                    </li>
                </ul>
            </div>

            {/* second sidenavbar */}
            <div className="sidebarMenu mb-2.5">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList px-4 py-1">
                    <li className="sidebarListItems flex items-center">
                    <MdLineStyle className="sidebarIcon" />
                    Users
                    </li>

                    <li className="sidebarListItems flex  items-center" >
                    <MdOutlineTimeline className="sidebarIcon" />
                    Analytics
                    </li>


                    <li className="sidebarListItems flex items-center">
                    <MdTrendingUp className="sidebarIcon" />
                   Sales
                    </li>
                </ul>
            </div>

                {/* third sidenavbar */}
                <div className="sidebarMenu mb-2.5">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList px-4 py-1">
                    <li className="sidebarListItems flex items-center">
                    <MdLineStyle className="sidebarIcon" />
                    Home
                    </li>

                    <li className="sidebarListItems flex  items-center" >
                    <MdOutlineTimeline className="sidebarIcon" />
                    Analytics
                    </li>

                    <li className="sidebarListItems flex items-center">
                    <MdTrendingUp className="sidebarIcon" />
                   Sales
                    </li>
                </ul>
            </div>

                {/* fourth sidenavbar */}
                <div className="sidebarMenu mb-2.5">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList px-4 py-1">
                    <li className="sidebarListItems flex items-center">
                    <MdLineStyle className="sidebarIcon" />
                    Home
                    </li>

                    <li className="sidebarListItems flex  items-center" >
                    <MdOutlineTimeline className="sidebarIcon" />
                    Analytics
                    </li>

                    <li className="sidebarListItems flex items-center">
                    <MdTrendingUp className="sidebarIcon" />
                   Sales
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}