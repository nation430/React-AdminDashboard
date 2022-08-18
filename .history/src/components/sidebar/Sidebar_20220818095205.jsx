import "./sidebar.css";
import { MdLineStyle } from "react-icons/md";

export default function sidebar(){
    return(
        <div className="sidebar"> 
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItems flex">
                    <MdLineStyle />
                    Home
                    </li>

                  
                  
              
                </ul>
            </div>
        </div>
        </div>
    )
}