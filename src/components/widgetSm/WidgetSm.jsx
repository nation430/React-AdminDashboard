import "./widgetSm.css"
import {MdVisibility  } from "react-icons/md";

export default function widgetSm(){
    return(
        <div className="widgetSm p-5 mr-5">
            <span className="widgetSmTitle font-semibold">New Join Member</span>
            <ul className="widgetSmList m-0 p-0">
                <li className="widgetSmListItem flex items-center justify-between">
                <img src="images/member1.jpg" alt="MemberImg"  className="memberAvater w-6 h-6 rounded-full object-cover"/>
                <div className="widegetSmUser flex flex-col	">
                <span className="widgetSmUsername font-semibold">Loveday Nation</span>
                 <span className="widgetSmUserTitle font-light text-sm">Software Engineer</span>
                </div>
                <button type="button" className="widgetSmButton flex items-center border-none">
               <MdVisibility className="widgetSmIcon text-base"/>
               Display
                </button>
                </li>
            </ul>

            {/* second member */}
            <ul className="widgetSmList m-0 p-0">
                <li className="widgetSmListItem flex items-center justify-between">
                <img src="images/member1.jpg" alt="MemberImg"  className="memberAvater w-6 h-6 rounded-full object-cover"/>
                <div className="widegetSmUser flex flex-col	">
                <span className="widgetSmUsername font-semibold">Loveday Nation</span>
                 <span className="widgetSmUserTitle font-light text-sm">Software Engineer</span>
                </div>
                <button type="button" className="widgetSmButton flex items-center border-none">
               <MdVisibility className="widgetSmIcon text-base"/>
               Display
                </button>
                </li>
            </ul>
            
            {/* third member */}
            <ul className="widgetSmList m-0 p-0">
                <li className="widgetSmListItem flex items-center justify-between">
                <img src="images/member1.jpg" alt="MemberImg"  className="memberAvater w-6 h-6 rounded-full object-cover"/>
                <div className="widegetSmUser flex flex-col	">
                <span className="widgetSmUsername font-semibold">Loveday Nation</span>
                 <span className="widgetSmUserTitle font-light text-sm">Software Engineer</span>
                </div>
                <button type="button" className="widgetSmButton flex items-center border-none">
               <MdVisibility className="widgetSmIcon text-base"/>
               Display
                </button>
                </li>
            </ul>


            {/* fourth member */}

            <ul className="widgetSmList m-0 p-0">
                <li className="widgetSmListItem flex items-center justify-between">
                <img src="images/member1.jpg" alt="MemberImg"  className="memberAvater w-6 h-6 rounded-full object-cover"/>
                <div className="widegetSmUser flex flex-col	">
                <span className="widgetSmUsername font-semibold">Loveday Nation</span>
                 <span className="widgetSmUserTitle font-light text-sm">Software Engineer</span>
                </div>
                <button type="button" className="widgetSmButton flex items-center border-none">
               <MdVisibility className="widgetSmIcon text-base"/>
               Display
                </button>
                </li>
            </ul>


            {/* fifth member */}

            <ul className="widgetSmList m-0 p-0">
                <li className="widgetSmListItem flex items-center justify-between">
                <img src="images/member1.jpg" alt="MemberImg"  className="memberAvater w-6 h-6 rounded-full object-cover"/>
                <div className="widegetSmUser flex flex-col	">
                <span className="widgetSmUsername font-semibold">Loveday Nation</span>
                 <span className="widgetSmUserTitle font-light text-sm">Software Engineer</span>
                </div>
                <button type="button" className="widgetSmButton flex items-center border-none">
               <MdVisibility className="widgetSmIcon text-base"/>
               Display
                </button>
                </li>
            </ul>
        </div>
    )
}