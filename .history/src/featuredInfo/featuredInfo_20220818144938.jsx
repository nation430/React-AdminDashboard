import "./featuredInfo.css"
import { AiOutlineArrowDown} from "react-icons/ai";

export default function fearturedInfo(){
    return (
        <div className="featured">
            {/* first feature */}
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer flex">
                    <span className="featuredMoney">$2, 415</span>
                    <span className="featuredMonetRate flex">-11.4
                    <AiOutlineArrowDown/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            {/* second feature */}
              <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer flex">
                    <span className="featuredMoney">$4, 415</span>
                    <span className="featuredMonetRate flex">-1.4
                    <AiOutlineArrowDown/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            {/* third feature */}
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer flex">
                    <span className="featuredMoney">$2, 225</span>
                    <span className="featuredMonetRate flex">+2.4
                    <AiOutlineArrowDown/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}