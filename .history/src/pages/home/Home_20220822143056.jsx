import "./home.css"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData"
import WidgetLg from "../components/widgetLg/WidgetLg"
import WidgetSm from "../components/widgetSm/WidgetSm"


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