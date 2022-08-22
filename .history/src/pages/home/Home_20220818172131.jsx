import "./home.css"
import FeaturedInfo from "../../featuredInfo/featuredInfo"
import Chart from "../../chart/Chart"
import { userData } from "../../dummyData"
import WidgetLg from "../../widgetLg/WidgetLg"
import WidgetSm from "../../widgetSm/WidgetSm"




export default function Home(){
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} dataKey = "Active User" title = "User Analytics" grid/>
            <div className="widget flex m-5">
            <WidgetSm/>
            <WidgetLg/>
            </div>
           
        </div>
    )
}