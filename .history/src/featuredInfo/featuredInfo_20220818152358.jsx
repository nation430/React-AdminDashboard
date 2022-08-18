import "./featuredInfo.css"
import { AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";

export default function fearturedInfo(){
    return (
        <div className="featured w-full flex justify-between">
            {/* first feature */}
            <div className="featuredItem">
                <span className="featuredTitle text-xl">Revenue</span>
                <div className="featuredMoneyContainer flex ">
                    <span className="featuredMoney font-semibold text-3xl">$2, 415</span>
                    <span className="featuredMonetRate flex items-center">-11.4
                    <AiOutlineArrowDown featuredIcon negative/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            {/* second feature */}
              <div className="featuredItem">
                <span className="featuredTitle text-xl">Sales</span>
                <div className="featuredMoneyContainer flex">
                    <span className="featuredMoney font-semibold text-3xl">$4, 415</span>
                    <span className="featuredMonetRate flex items-center">-1.4
                    <AiOutlineArrowDown featuredIcon negative/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            {/* third feature */}
            <div className="featuredItem">
                <span className="featuredTitle text-xl">Cost</span>
                <div className="featuredMoneyContainer flex">
                    <span className="featuredMoney font-semibold text-3xl">$2, 225</span>
                    <span className="featuredMonetRate flex items-center">+2.4
                    <AiOutlineArrowUp featuredIcon/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}