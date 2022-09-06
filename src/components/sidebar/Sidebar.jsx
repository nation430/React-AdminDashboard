import "./sidebar.css";
import { MdLineStyle, MdOutlineTimeline, MdTrendingUp, MdStorefront, MdAttachMoney, MdOutlineMail, MdDynamicFeed, MdWorkOutline, MdReport} from "react-icons/md";
import { HiOutlineUser} from "react-icons/hi";
import { FiBarChart2, FiMessageSquare} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function sidebar(){
    return(
        <div className="sidebar sticky"> 
        <div className="sidebarWrapper p-5">
            {/* first sidenavbar */}
            <div className="sidebarMenu mb-2.5">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList px-4 py-0">
                <Link to="/" className="link">
                    <li className="sidebarListItems flex items-center">
                    <MdLineStyle className="sidebarIcon"/>
                    Home
                    </li>
                    </Link>

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
                <Link to="/users" className="link">
                    <li className="sidebarListItems flex items-center">
                    <HiOutlineUser className="sidebarIcon" />
                    Users
                    </li>
                    </Link>

                   <Link to="/products" className="link">
                    <li className="sidebarListItems flex  items-center" >
                    <MdStorefront className="sidebarIcon" />
                    Products
                    </li>
                    </Link>

                    <li className="sidebarListItems flex items-center">
                    <MdAttachMoney className="sidebarIcon" />
                   Transactions
                    </li>


                    <li className="sidebarListItems flex items-center">
                    <FiBarChart2 className="sidebarIcon" />
                   Reports
                    </li>
                </ul>
            </div>

                {/* third sidenavbar */}
                <div className="sidebarMenu mb-2.5">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList px-4 py-1">
                    <li className="sidebarListItems flex items-center">
                    <MdOutlineMail className="sidebarIcon" />
                    Mail
                    </li>

                    <li className="sidebarListItems flex  items-center" >
                    <MdDynamicFeed className="sidebarIcon" />
                    Feedback
                    </li>

                    <li className="sidebarListItems flex items-center">
                    <FiMessageSquare className="sidebarIcon" />
                   Messages
                    </li>
                </ul>
            </div>

                {/* fourth sidenavbar */}
                <div className="sidebarMenu mb-2.5">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList px-4 py-1">
                    <li className="sidebarListItems flex items-center">
                    <MdWorkOutline className="sidebarIcon" />
                    Manage
                    </li>

                    <li className="sidebarListItems flex  items-center" >
                    <MdOutlineTimeline className="sidebarIcon" />
                    Analytics
                    </li>

                    <li className="sidebarListItems flex items-center">
                    <MdReport className="sidebarIcon" />
                   Reports
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}