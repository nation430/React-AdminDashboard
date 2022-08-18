import "./home.css"
import FeaturedInfo from "../../featuredInfo/featuredInfo"
import Chart from "../../chart/Chart"

export default function Home(){
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart/>
        </div>
    )
}