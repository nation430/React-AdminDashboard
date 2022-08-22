import "./home.css"
import FeaturedInfo from "../../featuredInfo/featuredInfo"
import Chart from "../../chart/Chart"
import { userData } from "../../dummyData"
import WidgetLg from "../../widgetLg/WidgetLg"


export default function Home(){
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} dataKey = "Active User" title = "User Analytics" grid/>
            <widgetSm/>
            <WidgetLg/>
        </div>
    )
}