import "./overview.css"
import OverviewCards from "./OverviewCards"

const Overview = ({ todayData, status }) => {


    return (
        <div className="overview">
            <h2 className="ow">Overview- Today</h2>
            <div className="overview-cards">
                {todayData.map((todayData) => (
                    <OverviewCards status={status} key={todayData.id} todayData={todayData} />
                ))}

            </div>
        </div>
    )
}

export default Overview
