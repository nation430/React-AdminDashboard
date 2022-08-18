import "./sidebar.css";
import { BiBell } from 'react-icons/bi';
export default function sidebar(){
    return(
        <div className="sidebar flex"> 
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItems flex">
                    <BiBell />
                    Home
                    </li>
              
                </ul>
            </div>
        </div>
        </div>
    )
}