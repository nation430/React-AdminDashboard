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
                <button type="button" className="widgetSmButton">
               <MdVisibility/>
               Display
                </button>
                <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
  <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
</button>
                </li>
            </ul>
        </div>
    )
}