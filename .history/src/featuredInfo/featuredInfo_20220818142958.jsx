import "./fearturedInfo.css"
import { AiOutlineArrowDown} from "react-icons/ai";

export default function fearturedInfo(){
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2, 415</span>
                    <span className="featuredMonetRate">11.4
                    <AiOutlineArrowDown/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}