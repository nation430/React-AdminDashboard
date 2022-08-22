import "./widgetSm.css"

export default function widgetSm(){
    return(
        <div className="widgetSm p-5 mr-5">
            <span className="widgetSmTitle">New Join Member</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                <img src="images/member1.jpg" alt="BigCo Inc. logo"  className="topAvater w-6 h-6 rounded-full cursor-pointer ..."/>
                <div className="widegetSmUser">
                <span className="widgetSmUsername">Loveday Nation</span>
                 <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">

                </button>
                </li>
            </ul>
        </div>
    )
}