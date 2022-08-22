import "./widgetSm.css"
import {MdVisibility  } from "react-icons/md";

export default function widgetSm(){
    return(
        <div className="widgetSm p-5 mr-5">
            <span className="widgetSmTitle">New Join Member</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                <img src="images/member1.jpg" alt="BigCo Inc. logo"  className="memberAvater  cursor-pointer ..."/>
                <div className="widegetSmUser">
                <span className="widgetSmUsername">Loveday Nation</span>
                 <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
               <MdVisibility/>
               Display
                </button>
                </li>
            </ul>
        </div>
    )
}